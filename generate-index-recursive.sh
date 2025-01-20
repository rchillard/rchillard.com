#!/bin/bash

# Load templates once
HEAD_HTML=$(<./src/html/template-header.html)
MAIN_HTML=$(<./src/html/template-index.html)
FOOT_HTML=$(<./src/html/template-footer.html)

generate_html() {
    local dir="$1"
    local items=("${!2}")

    # Generate list items for HTML
    local list_items=""
    for item in "${items[@]}"; do
        local item_name=$(basename "$item")
        list_items+="<li><a href=\"$(basename "$item")\">$item_name</a></li>\n"
    done

    # Replace {LIST_ITEMS} in the main HTML template
    local document_html="${HEAD_HTML}${MAIN_HTML//\{LIST_ITEMS\}/$list_items}${FOOT_HTML}"

    # Write to index.html
    local index_file="$dir/index.html"
    echo -e "$document_html" > "$index_file"
}

traverse_directory() {
    local dir="$1"
    local allposts="$2"
    local -a posts=()  # Collects all HTML files in this directory
    local -a subdirs=() # Collects all subdirectories

    mapfile -t subdirs < <(find $dir -mindepth 1 -maxdepth 1 -type d | sort)

    if [ ${#subdirs[@]} -eq 0 ]; then
        echo "No subirectories in $dir"
        mapfile -t post_array < <(find $day_dir -mindepth 1 -maxdepth 1 -type f -name "*.html" | sort)

        for post in "${post_array[@]}"; do
            echo "Found post: $post"

            if [[ "$file_name" != "index.html" ]]; then
                allposts+=$file_name
            fi
        done

        # We have all the posts in this directory
        traverse_directory 
    else
        echo "Subdirectories in $dir, recursing lower..."
        for subdir in "${subdirs[@]}"; do
            echo $subdir
            traverse_directory $subdir
        done
    fi
}

list_files() {
  local dir=$1
  local file_list=$2
  echo "Directory: $dir"
  for file in "$dir"/*; do
    if [[ -d "$file" ]]; then
      # Recursive case: it's a directory, call list_files
      list_files "$file" "$file_list"
    else
      # Base case: it's a file, just print it
      echo "  File: $file"
      file_list+=$file
    fi
  done

  echo $file_list
}

# Start traversal from the root directory
# traverse_directory "./src/technology"
list_files "./src/technology"