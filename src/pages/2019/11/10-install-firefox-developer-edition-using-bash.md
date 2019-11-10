---
title: "How to Install Firefox Developer Edition using Bash"
date: "2019-11-10"
category: "development"
tags: ['productivity']
---

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
If you're curious about the first half of this script, I invite you to read my last post on bash helper functions.  While it may seem a bit overwrought, helper functions make it easier to reason around bash's esoteric syntax, and I think they make my code more readable.  I'm sharing them here as an example, so that everyone can see them in action.  They make the rest of the script easy.

## Determine Latest Version
Two of the hardest things about doing this programmatically are:
1. To determine the latest version, you have to parse data from a remote endpoint returning JSON
2. To download the right file you then have to compose a URL from your version data (step 1)

Many of the existing examples I saw on the internet from other blogs *thought they were downloading the latest version*, but actually had scripts that would break in certain cases of semantic versioning.  This is due to how programs like sort return numbers appended to text.  Here's the magic:
```bash
$(curl --silent $firefox_json \
                | jq . \
                | egrep "version" \
                | sort --reverse --version-sort \
                | head -1 \
                | awk -F[\"] '{print $4}')
```

Let's break it down:
- curl is a command line interface (cli) to make HTTP requests of remote urls
- jq is a powerful cli to format JSON data, which is important because Mozilla's API returns JSON
- egrep is a program that searches for text patterns using regular expressions
- sort is a program to take raw input and sort it into output as you specify
- head displays the first line of a file or input
- awk is used to find text and perform an action on it

The | is a pipe operator, which stitches our command together by taking the output of one command and piping it into the next one.  With all this considered together, we're actually doing the following:
1. Downloading the file (curl --silent $firefox_json)
2. Reformatting it into JSON (jq .)
3. Search for and return only the version fields (egrep "version")
4. Sort those fields in reverse order (sort --reverse, from newest to oldest) using a version algorithm (--version-sort, this was the key!)
5. Take the top version (the latest or newest one)
6. Print the 4th string separated by the \ character (awk -F[\"] '{print $4}')

After all of that work, we know the latest version of Firefox Developer Edition!

## Download Latest Version
Now that we know the proper version, we take our research on how Mozilla distributes FireFox Developer Edition, and we make a few assumptions to construct a valid URL for the actual program.
```bash
firefox_file=firefox-$firefox_version.tar.bz2
firefox_url=https://download-installer.cdn.mozilla.net/pub/devedition/releases/$firefox_version/linux-x86_64/en-US/$firefox_file
```

In this case, we know Mozilla distributes this as a tarball using bzip2 compression, and that they make it available on their CDN at a predictable path for our operating system, processor architecture, and language.  Future versions of this script could detect these variables locally and adjust the download URL.

## Backup Previous Version
I posted about this yesterday, but it's extremely useful to build helper functions in bash, which you can re-use on many different projects.  In this case, I knew Firefox was one piece of software I wanted to automate installing, but also that there'd be many more programs later.  I took the time to write a helper function that can check on an existing pathway and then back up the files in that pathway before wiping them out:
```bash
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
```

I wanted to point out two things about this simple script:
1. It's a good practice to use the spelled out flags in scripts (--verbose instead of -v), because they're easy to read.  Since it's a script, you don't need to be terse with your syntax.  The computer doesn't care, but when a human is stopping to read it or troubleshoot a problem, then they will care, because it's easier to see what a command is doing without having to look up a manual page.
2. I use absolute paths here so that the script never has to change directory.  This is on purpose, because changing the directory changes the context from where the user ran the script.  It's a best practice and expected that a script will not change the context you run it from. 

# Check for ~/Downloads directory
This is an even simpler example, but it's important to always check for he existence of a directory, *before* you try to place a file in that directory.  In this case, anyone using Ubuntu should have a ~/Downloads folder already, but for users who are not, this is a useful guard clause.
```bash
if [ -d ~/Downloads ]; then
  message notify "~/Downloads exists, proceeding to save file there."
else
  message notify "No Downloads folder exists yet, so creating one."
  mkdir --verbose ~/Downloads
fi
```

The --verbose flag means the full output of a command is output, making it easier for the person running the script to see what is happening.

## Create a Symbolic Link
A symbolic link is a special file that points to another file or directory.  If you come from a Windows background, then this is basically just a shortcut.  In the Linux world, a symbolic link or symlink is an alias for another file.  Why do we need one?

Well, for this script we are creating a symbolic link in a directory that exists as an executable path.  In other words, we're extracting our program files, then making a shortcut that will allow us to run our program while keeping our program files where we want them.

```bash
  message notify "Extracting downloaded $firefox_file..."
  tar --extract --bzip2 --file ~/Downloads/$firefox_file --directory /opt

  message notify "Creating symlink for Firefox"
  ln --force --symbolic --verbose /opt/firefox/firefox /usr/local/bin/firefox
```

In this case, we're putting our files in the /opt directory, which stands for 'options' because it has traditionally been used as a place to install add-on software that did not come with the operating system.  Since this is exactly that, it feels like the right place to put it!

We're symbolic linking or creating a shortcut to the /usr/local/bin directory because this directory is for normal user programs which were built locally and are not a part of the operating system's packages.  We're installing this ourselves, without help of the package manager.

## Copy a Desktop Setting
We want to be able to search for and add our new Firefox program as a favorite, so it appears on our dock.  In order to do that, we need to copy a configuration file that tells Ubuntu what to call our program, where to run it from, how to run it, and what icon it should have, as well as more:

```bash
# Save in file named firefox-developer.desktop
[Desktop Entry]
Name=Firefox Developer
GenericName=Firefox Developer Edition
Exec=/usr/local/bin/firefox
Terminal=false
Icon=/opt/firefox/browser/chrome/icons/default/default128.png
Type=Application
Categories=Application;Network;X-Developer;
Comment=Firefox Developer Edition Web Browser
```

Once you've saved that file in the same directory as your script, you can see how this part works:

```bash
cp --verbose ./firefox-developer.desktop /usr/share/applications/
chmod +x /usr/share/applications/firefox-developer.desktop
```

These two commands copy the file into its proper place and then make it executable.

## Clean Up
We've done a lot with this script.  The final part removes the downloaded zip files to save disk space.

```bash
message notify "Cleaning up downloaded files..."
rm --verbose ~/Downloads/$firefox_file
```

Even though it's only 70 or so lines of code, I'm really excited to share this with the world, because I think it will help address an issue in many different blog posts around getting the actual, real latest version.  In order to write this script, I had to learn a lot of different bash commands, new syntax, new programs, and what feels like the most valuable skill of all: how to parse a JSON API to get just the data I need.

Keep on bashing on!