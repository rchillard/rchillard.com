---
title: "Install HashiCorp"
date: "2019-11-21"
category: "development"
tags: ['productivity']
---

Building on my last post, I wanted to breakdown a similar bash script that will install a HashiCorp tool for you called Packer.  HashiCorp is an open source first company that produces tools that make managing cloud infrastructure easier.  They also distribute those tools as stand alone binary files, which are completely portable.  Packer is a HashiCorp tool that will allow you to easily build machine images in a reproducible way.  This is important for running immutable infrastructure in the cloud, because you want to be able to easily build freshly patched images and run your hosts using them. 

This post isn't about cloud infrastructure though.  This is about simple bash scripts to download binary files from presupposed places on the interwebz. :)

Here's the whole script:

```bash
#!/bin/bash
# Color in command line messaging function
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
    mkdir -v /opt/$1
  else
    message notify "Previous version of $1 exists.  Deleting last backup and saving current version as backup."
    rm -rfv /opt/$1-previous
    mv -v /opt/$1 /opt/$1-previous
    message success "Old version backed up to /opt/$1-previous"
  fi
}

if [ ! -d "~/Downloads" ]; then
  message notify "No Downloads folder exists yet, so creating one."
  mkdir -v ~/Downloads
fi

# Determine Packer actual URL and then download the actual package to ~/Downloads
message notify "Installing Packer"
packer_url=$(curl --silent https://releases.hashicorp.com/index.json | jq '{packer}' | egrep "linux_amd64" | sort -rV | head -1 | awk -F[\"] '{print $4}')

curl -o ~/Downloads/packer-latest $packer_url
if [ $exit_status != 0 ]; then
  exit $exit_status
else
  check-create-backup packer

  unzip ~/Downloads/packer-latest -d /opt/packer
  chmod +x /opt/packer/packer

  message notify "Creating symlink from /opt to /usr/local/bin"
  ln -s /opt/packer/packer /usr/local/bin/packer

  message notify "Cleaning up downloaded files..."
  rm -v ~/Downloads/packer-latest

  message success "Packer should be installed now.  Type 'packer' to test."
fi

```

I won't take the time to rehash the bash helper functions in the previous post, which appear here again, except to highlight their value.  Taking the work from our last script to download Firefox and reusing it, the actual new code needed to write this is minimal (~20 lines).  It's mostly a task of figuring out how to calculate the version information and how to calculate the URL to download the binary file from.

Let's break it down.  Calculating the URL where we can download Packer from:

```bash
packer_url=$(curl --silent https://releases.hashicorp.com/index.json | jq '{packer}' | egrep "linux_amd64" | sort -rV | head -1 | awk -F[\"] '{print $4}')
```

Lucky for us, HashiCorp provides a single API for all of their release information, which can be found at releases.hashicorp.com, and neatly comes in JSON format.  We're using the pipe | operator here heavily to drill down into the JSON data and figure out what applies to us:
- jq formats into JSON, while filtering for the name 'packer'
- egrep to search the text output for our operating system, our architecture 'linux_amd64'
- sort -rV is the key here, because we're using a sorting algorithm
- head -1 takes the top version (or latest one)
- Finally, printing the 4th string separated by the \ character (awk -F[\"] '{print $4}')

Let's finish up by reviewing how and where we install:

```bash
curl -o ~/Downloads/packer-latest $packer_url
if [ $exit_status != 0 ]; then
  exit $exit_status
else
  check-create-backup packer

  unzip ~/Downloads/packer-latest -d /opt/packer
  chmod +x /opt/packer/packer

  message notify "Creating symlink from /opt to /usr/local/bin"
  ln -s /opt/packer/packer /usr/local/bin/packer

  message notify "Cleaning up downloaded files..."
  rm -v ~/Downloads/packer-latest

  message success "Packer should be installed now.  Type 'packer' to test."
fi
```

With the URL known, we download the zip file to our ~/Downloads directory.  After that, it's just a matter of unzipping, making the binary executable with chmod, then creating a symlink to an executable path, so that the binary itself can be run from the command line.  After that, we clean up our downloaded zip file to save on disk space.

Today we went through how to download a binary file distributed as a zip from a provider that publishes a version API, and then how to install it in a way that is managed and easy to replace in the future.  I hope this helps you write your own bash scripts to accomplish much the same.  Hopefully you're starting to see the incredible strength of having a few helper bash functions that you can leverage for many different applications.