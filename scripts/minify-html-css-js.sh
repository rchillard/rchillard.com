#!/bin/bash
# minify.sh
# Usage
# input="example.html"      
# output="example.min.html"

DIR=$(dirname $(readlink -f $0))
source $DIR/util.sh

MESSAGE_DEBUG=1

minify() {
  local input_file="$1"
  local output_file="$2"

  # Check if the input file exists
  if [[ ! -f "$input_file" ]]; then
    message error "File '$input_file' does not exist."
    return 1
  fi

  # Use sed to remove comments and extra whitespace
  sed -E '
    # Remove HTML, CSS, and JS comments
    s/<!--.*?-->//g;
    s|/\*.*?\*/||g;
    s|//.*||g;

    # Remove leading/trailing whitespace
    s/^[ \t]+//;
    s/[ \t]+$//;

    # Remove extra spaces between tags or statements
    s/[ \t]+/ /g;
    s/>[ \t]+</></g;

    # Remove unnecessary newlines
    /^[ \t]*$/d;
  ' "$input_file" > "$output_file"

  message success "Minification complete. Minified file: $output_file"
}

minify "$input" "$output"
