#!/bin/bash
# build.sh

SRC_DIR="src/."
DEST_DIR="build/"

echo "Building site..."

# Delete the old directory and create a new one
rm --recursive --force "$DEST_DIR"
mkdir --parents "$DEST_DIR"

# Copy all files from source to destination directory
cp --recursive --verbose "$SRC_DIR/" "$DEST_DIR/"
echo "Files copied to $DEST_DIR."

# Get the current Unix timestamp
TIMESTAMP=$(date +%s)

# Search pattern, relevant: https://blog.codinghorror.com/parsing-html-the-cthulhu-way/
PATTERN='link rel="stylesheet" href="css/styles.css"'

# Calculate a new cache-busted value for the stylesheet link
NEW_HREF="css/styles.css?v=$TIMESTAMP"
echo "CSS cache will be busted by adding this query parameter: $NEW_HREF"

FILE_COUNT_CSS_UPDATED=0

# Create an array containing all .html files
mapfile -t html_files_array < <(find ./build -maxdepth 1 -type f -name "*.html")

FILE_COUNT_CSS_POSSIBLE=${#html_files_array[@]}

# Iterate over the array, checking each file for the pattern and updating if present
for html_file in "${html_files_array[@]}"; do
  echo "Found file: $html_file and will attempt to find line..."
  if grep --regexp="$PATTERN" "$html_file"; then
    echo "Found line: $PATTERN and will attempt to update..."
    sed --in-place "s|<link rel=\"stylesheet\" href=\"css/styles.css\">|<link rel=\"stylesheet\" href=\"$NEW_HREF\">|" "$html_file"
    echo "Updated $html_file with $PATTERN to new reference with timestamp $NEW_HREF."
    ((FILE_COUNT_CSS_UPDATED+=1))
  else
    echo "No matching line found in $html_file."
  fi
done

echo "Build complete..."
echo "HTML files updated: $FILE_COUNT_CSS_UPDATED / $FILE_COUNT_CSS_POSSIBLE"
