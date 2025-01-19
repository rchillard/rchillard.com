#!/bin/bash
# update-css.sh
# Usage
# 

DIR=$(dirname $(readlink -f $0))
source $DIR/util.sh

MESSAGE_DEBUG=1

# Get the current Unix timestamp
TIMESTAMP=$(date +%s)

# Search pattern, relevant: https://blog.codinghorror.com/parsing-html-the-cthulhu-way/
PATTERN='link rel="stylesheet" href="css/styles.css"'

# Calculate a new cache-busted value for the stylesheet link
NEW_HREF="css/styles.css?v=$TIMESTAMP"
message info "CSS cache will be busted by adding this query parameter: $NEW_HREF"

FILE_COUNT_CSS_UPDATED=0

# Create an array containing all .html files
mapfile -t html_files_array < <(find ./build -type f -name "*.html")

echo "${html_files_array[@]}"

FILE_COUNT_CSS_POSSIBLE=${#html_files_array[@]}

message info "Attempting to cache bust ${FILE_COUNT_CSS_POSSIBLE} HTML files..."

# Iterate over the array, checking each file for the pattern and updating if present
for html_file in "${html_files_array[@]}"; do
  message debug "Found file: $html_file and will attempt to find line..."
  if grep --regexp="$PATTERN" "$html_file"; then
    message debug "Found line: $PATTERN and will attempt to update..."
    sed --in-place "s|<link rel=\"stylesheet\" href=\"css/styles.css\">|<link rel=\"stylesheet\" href=\"$NEW_HREF\">|" "$html_file"
    message debug "Updated $html_file with $PATTERN to new reference with timestamp $NEW_HREF."
    ((FILE_COUNT_CSS_UPDATED+=1))
  else
    message debug "No matching line found in $html_file."
  fi
done

message notify "Build complete..."
message success "HTML files updated: $FILE_COUNT_CSS_UPDATED / $FILE_COUNT_CSS_POSSIBLE"