#!/bin/bash
# build.sh

# Load shared helper functions
DIR=$(dirname $(readlink -f $0))
source $DIR/scripts/util.sh

message notify "Building site..."

# 1. Delete old /build
# 1.1 Copy raw files from /src to /build
/bin/bash $DIR/scripts/copy-files.sh

# 2. Generate Markdown indexes from Markdown save as Markdown
/bin/bash $DIR/generate-index.sh

# 3. Create HTML from Markdown files
/bin/bash $DIR/generate.sh

# Bust the cache on CSS by adding query parameter
/bin/bash $DIR/scripts/update-css.sh

message notify "Built site!"
