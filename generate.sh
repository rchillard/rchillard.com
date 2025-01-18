#!/bin/bash
# generate.sh
DIR=$(dirname $(readlink -f $0))
source $DIR/scripts/util.sh

MESSAGE_DEBUG=1

# Required programs
dependencies=(pandoc)

message notify "generate-html.sh checking for necessary dependencies: $dependencies"

is-program-installed pandoc

message notify "MD files will be converted to HTML using pandoc..."

FILE_COUNT_HTML_GENERATED=0

# Create an array containing all .md files
mapfile -t md_files_array < <(find ./src/leadership ./src/technology ./src/html -type f -name "*.md")

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