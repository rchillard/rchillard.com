#!/bin/bash

DIR=./src/technology/

# Load templates once
HEAD_HTML=$(<./src/html/template-header.html)
MAIN_HTML=$(<./src/html/template-index.html)
FOOT_HTML=$(<./src/html/template-footer.html)

# Function to clean paths
clean_paths() {
    local paths=("$@")  # Capture the input array as function arguments
    local cleaned=()    # Initialize the cleaned array

    for path in "${paths[@]}"; do
        cleaned+=("${path#./src/}")  # Remove the prefix and add to the cleaned array
    done

    echo "${cleaned[@]}"  # Return the cleaned array as a space-separated string
}

# generate_html() {
#     local dir="$1"
#     local posts=("${!2}")

#     local document_html="${HEAD_HTML}${MAIN_HTML}${FOOT_HTML}"
#     local index_file="$dir/index.html"

#     echo "$document_html" > "$index_file"
#     local list_items=$(printf "<li><a href=\"%s\">%s</a></li>\n" "${posts[@]}" "${posts[@]}")
#     sed --in-place "s|{LIST_ITEMS}|$list_items|g" "$index_file"
# }

mapfile -t year_array < <(find $DIR -mindepth 1 -maxdepth 1 -type d)

for year_dir in "${year_array[@]}"; do
    echo "Searching year: $year_dir"
    posts_in_the_year=""

    mapfile -t month_array < <(find $year_dir -mindepth 1 -maxdepth 1 -type d | sort)

    for month_dir in "${month_array[@]}"; do
        echo "---Found month: $month_dir"
        posts_in_the_month=""

        mapfile -t day_array < <(find $month_dir -mindepth 1 -maxdepth 1 -type d | sort)

        for day_dir in "${day_array[@]}"; do
            echo "----Found day: $day_dir"
            posts_in_the_day=""

            mapfile -t post_array < <(find $day_dir -mindepth 1 -maxdepth 1 -type f -name "*.html" | sort)

            for post in "${post_array[@]}"; do
                echo "-----Found post: $post"
                file_name=$(basename "$post")

                echo $file_name

                if [[ "$file_name" != "index.html" ]]; then
                    # clean_path=("${post#./src/}")
                    # echo "day_dir: $day_dir"
                    posts_in_the_day+="<li><a href=\"$file_name\">$post</a></li>\n"
                fi
                
            done
            # You have all the posts for this day

            # generate_html "$day_dir" posts_in_the_day[@]

            echo $posts_in_the_day
            
            DOCUMENT_HTML="${HEAD_HTML}${MAIN_HTML}${FOOT_HTML}"

            index_file_for_day="$day_dir/index.html"

            echo "$DOCUMENT_HTML" > $index_file_for_day

            sed --in-place "s|{LIST_ITEMS}|$posts_in_the_day|g" "$index_file_for_day"

            posts_in_the_month+=$posts_in_the_day
            
        done
        # You have all the posts for this month

        # generate_html "$month_dir" posts_in_the_month[@]

        echo $posts_in_the_month

        # HEAD_HTML=$(cat ./src/html/template-header.html)
        # MAIN_HTML=$(cat ./src/html/template-index.html)
        # FOOT_HTML=$(cat ./src/html/template-footer.html)
        DOCUMENT_HTML="${HEAD_HTML}${MAIN_HTML}${FOOT_HTML}"

        index_file_for_month="$month_dir/index.html"

        echo "$DOCUMENT_HTML" > $index_file_for_month

        sed --in-place "s|{LIST_ITEMS}|$posts_in_the_month|g" "$index_file_for_month"

        posts_in_the_year+=$posts_in_the_month

    done
    # You have all the posts for this year

    # generate_html "$year_dir" posts_in_the_year[@]

    echo $posts_in_the_year

    # HEAD_HTML=$(cat ./src/html/template-header.html)
    # MAIN_HTML=$(cat ./src/html/template-index.html)
    # FOOT_HTML=$(cat ./src/html/template-footer.html)
    DOCUMENT_HTML="${HEAD_HTML}${MAIN_HTML}${FOOT_HTML}"

    index_file_for_year="$year_dir/index.html"

    echo "$DOCUMENT_HTML" > $index_file_for_year

    sed --in-place "s|{LIST_ITEMS}|$posts_in_the_year|g" "$index_file_for_year"
done