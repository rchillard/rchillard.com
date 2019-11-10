---
title: "How to Install Firefox Developer Edition on Ubuntu 18.04"
date: "2019-11-10"
category: "development"
tags: ['productivity']
---

Returning from a long break, I thought I'd try something totally new.  I've long been looking for a way to programmatically rebuild my laptop, so I can nuke it whenever I feel like, run a set of scripts, and have a fresh and clean operating system reloaded for me.  Since I've started using Ubuntu on my laptop, I've had to level up my bash skills to make this automated approach a reality.

Today, I'm going to run down what I think is a very robust script for installing Firefox Developer Edition using bash on Ubuntu 18.04+.  I found several blog posts and many help articles on how to do this, but none of them actually worked correctly.  This post is for those that want a single bash script to:
- Download latest version of Firefox Developer Edition
- Backup their previous version in case of issue
- Create a desktop entry they can favorite

For the anxious, here's the entire script up front.  I'll take you through it step by step afterward:
```bash
#!/bin/bash
# Function to make messaging easier
read -r error success warning notify nocolor <<<$(echo "\033[1;31m" "\033[1;32m" "\033[1;33m" "\033[1;34m" "\033[0m")
message() {
  msg="$2" && echo -e "${!1}$1:${nocolor} $2" 1>&2
}

# Check for root privileges
if [[ "$EUID" != 0 ]]; then
  message notify "Please assume root privileges"
  exit 1
fi

# Backup helper function
check-create-backup() {
  if [ ! -d "/opt/$1" ]; then
    message notify "/opt/$1 is not installed."
    mkdir --verbose /opt/$1
  else
    message notify "Previous version of $1 exists.  Deleting last backup and saving current version as backup."
    rm --force --recursive /opt/$1-previous
    mv --verbose /opt/$1 /opt/$1-previous
    message success "Old version backed up to /opt/$1-previous"
  fi
}

# Check for ~/Downloads directory
if [ -d ~/Downloads ]; then
  message notify "~/Downloads exists, proceeding to save file there."
else
  message notify "No Downloads folder exists yet, so creating one."
  mkdir --verbose ~/Downloads
fi

# Calculate current Firefox version and download URL
firefox_json=https://product-details.mozilla.org/1.0/devedition.json
firefox_version=$(curl --silent $firefox_json | jq . | egrep "version" | sort --reverse --version-sort | head -1 | awk -F[\"] '{print $4}')
firefox_file=firefox-$firefox_version.tar.bz2
firefox_url=https://download-installer.cdn.mozilla.net/pub/devedition/releases/$firefox_version/linux-x86_64/en-US/$firefox_file


message notify "Downloading Firefox Developer Edition $firefox_version from $firefox_url"
curl -o ~/Downloads/$firefox_file $firefox_url
exit_status=$?
if [ $exit_status -ne 0 ]; then
  exit $exit_status
else
  check-create-backup firefox

  message notify "Extracting downloaded $firefox_file..."
  tar --extract --bzip2 --file ~/Downloads/$firefox_file --directory /opt

  message notify "Creating symlink for Firefox"
  ln --force --symbolic --verbose /opt/firefox/firefox /usr/local/bin/firefox

  cp --verbose ./firefox-developer.desktop /usr/share/applications/
  chmod +x /usr/share/applications/firefox-developer.desktop

  message notify "Cleaning up downloaded files..."
  rm --verbose ~/Downloads/$firefox_file
fi

message success "Firefox Developer Edition $firefox_version has been installed."
message notify "To add to your favorites, search, right click, and select 'Add to Favorites'"
```

## Helper Functions


## Calculating the Correct Firefox URL

## 