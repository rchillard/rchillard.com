#!/bin/bash
# util.sh

# Make messaging/echo with color easier on the command line
# Usage: message success "This is a success message!"
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
# Usage: is-program-installed jq
is-program-installed() {
  which $1 >> /dev/null
  if [ $? -eq 1 ]; then
    message error "Program required: $1"
    exit 1
  else
    message info "$1 is installed"
  fi
}