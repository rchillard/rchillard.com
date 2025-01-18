#!/bin/bash
# build.sh

# Load shared helper functions
DIR=$(dirname $(readlink -f $0))
source $DIR/scripts/util.sh

message notify "Building site..."

# Delete old /build
# Copy raw files from /src to /build
/bin/bash $DIR/scripts/copy-files.sh

# Bust the cache on CSS by adding query parameter
/bin/bash $DIR/scripts/update-css.sh

message notify "Built site!"
