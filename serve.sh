#!/bin/bash
# serve.sh 

# Load shared helper functions
DIR=$(dirname $(readlink -f $0))
source $DIR/scripts/util.sh

SRC_DIR=(${DIR}/src)
SITE_URL="http://0.0.0.0:8000/"

# Open Firefox tab
message notify "Opening a new firefox tab to: ${SITE_URL}"

firefox -new-tab $SITE_URL

# Launch basic HTTP/web server
message notify "Launching a basic web server using... ${SRC_DIR}"

python3 -m http.server -d $SRC_DIR
