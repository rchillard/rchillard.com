#!/bin/bash
# build.sh

MESSAGE_DEBUG=1

# Make messaging/echo with color easier on the command line
read -r error success warning notify info <<<$(echo "\033[1;31m" "\033[1;32m" "\033[1;33m" "\033[1;34m" "\033[0m")
message() {
  local msg_type="$1"
  local msg="$2"

  # Handle debug message printing based on MESSAGE_DEBUG variable
  if [[ "$msg_type" == "debug" && "${MESSAGE_DEBUG:-0}" -eq 0 ]]; then
    return
  fi

  # Print the actual message
  echo -e "${!msg_type}$msg_type:${info} $msg" 1>&2
}

# Check for program being installed, exit if not
is-program-installed() {
  which $1 >> /dev/null
  if [ $? -eq 1 ]; then
    message error "Program required: $1"
    exit 1
  else
    message info "$1 is installed"
  fi
}


# Required programs
dependencies=(pandoc)

message notify "build.sh checking for necessary dependencies: $dependencies"

is-program-installed pandoc

SRC_DIR="src/."
DEST_DIR="build/"

message notify "Building site..."

# Delete the old directory and create a new one
rm --recursive --force "$DEST_DIR"
mkdir --parents "$DEST_DIR"

# Copy all files from source to destination directory
cp --recursive --verbose "$SRC_DIR/" "$DEST_DIR/"
message notify "Files copied to $DEST_DIR."

message notify "MD files will be converted to HTML using pandoc..."

FILE_COUNT_HTML_GENERATED=0

# Create an array containing all .md files
mapfile -t md_files_array < <(find ./build -type f -name "*.md")

FILE_COUNT_HTML_POSSIBLE=${#md_files_array[@]}

# Iterate over the array, checking each file for the pattern and updating if present
for md_file in "${md_files_array[@]}"; do
  message debug "Found file: $md_file and will attempt to generate HTML..."

  file_raw_name=$(basename "$md_file" .md)
  file_html_name="${file_raw_name}.html"

  file_dir=$(dirname "$md_file")
  # Iterate over Markdown (.md) files and generate HTML
  HEAD_HTML=$(cat ./src/html/template-header.html)
  BODY_HTML=$(pandoc --from gfm --to html $md_file --no-highlight)
  FOOT_HTML=$(cat ./src/html/template-footer.html)

  # echo "$BODY_HTML"

  DOCUMENT_HTML="${HEAD_HTML}${BODY_HTML}${FOOT_HTML}"

  file_html="$file_dir/$file_html_name"
  echo "$DOCUMENT_HTML" > $file_html

  message debug "HTML generated and saved as: ${file_html}"
  ((FILE_COUNT_HTML_GENERATED+=1))
done

# Get the current Unix timestamp
TIMESTAMP=$(date +%s)

# Search pattern, relevant: https://blog.codinghorror.com/parsing-html-the-cthulhu-way/
PATTERN='link rel="stylesheet" href="css/styles.css"'

# Calculate a new cache-busted value for the stylesheet link
NEW_HREF="css/styles.css?v=$TIMESTAMP"
message info "CSS cache will be busted by adding this query parameter: $NEW_HREF"

FILE_COUNT_CSS_UPDATED=0

# Create an array containing all .html files
mapfile -t html_files_array < <(find ./build -maxdepth 1 -type f -name "*.html")

FILE_COUNT_CSS_POSSIBLE=${#html_files_array[@]}

# Iterate over the array, checking each file for the pattern and updating if present
for html_file in "${html_files_array[@]}"; do
  message debug "Found file: $html_file and will attempt to find line..."
  if grep --regexp="$PATTERN" "$html_file"; then
    message debug "Found line: $PATTERN and will attempt to update..."
    sed --silent --in-place "s|<link rel=\"stylesheet\" href=\"css/styles.css\">|<link rel=\"stylesheet\" href=\"$NEW_HREF\">|" "$html_file"
    message debug "Updated $html_file with $PATTERN to new reference with timestamp $NEW_HREF."
    ((FILE_COUNT_CSS_UPDATED+=1))
  else
    message debug "No matching line found in $html_file."
  fi
done

message notify "Build complete..."
message success "HTML files updated: $FILE_COUNT_CSS_UPDATED / $FILE_COUNT_CSS_POSSIBLE"
