#!/bin/bash
# copy.sh
# Usage
# 

DIR=$(dirname $(readlink -f $0))
source $DIR/util.sh

MESSAGE_DEBUG=1

SRC_DIR="src/."
DEST_DIR="build/"

# Delete the old directory and create a new one
rm --recursive --force "$DEST_DIR"
mkdir --parents "$DEST_DIR"

# Copy all files from source to destination directory
cp --recursive --verbose "$SRC_DIR/" "$DEST_DIR/"
message notify "Files copied to $DEST_DIR."