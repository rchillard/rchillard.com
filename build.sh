#!/bin/bash

# File to search and update
FILE="test-index.html"

# https://blog.codinghorror.com/parsing-html-the-cthulhu-way/
# Search pattern
PATTERN='link rel="stylesheet" href="css/styles.css"'

# Get the current Unix timestamp
TIMESTAMP=$(date +%s)

# Calculate a new cache-busted value for the stylesheet link
NEW_HREF="css/styles.css?v=$TIMESTAMP"

echo $NEW_HREF

# Check if the file exists
if [[ -f "$FILE" ]]; then
  # Search for the pattern and update it
  if grep -e "$PATTERN" "$FILE"; then
    sed -i "s|<link rel=\"stylesheet\" href=\"css/styles.css\">|<link rel=\"stylesheet\" href=\"$NEW_HREF\">|" "$FILE"
    echo "Updated line with timestamp $TIMESTAMP."
  else
    echo "No matching line found."
  fi
else
  echo "File $FILE does not exist."
fi
