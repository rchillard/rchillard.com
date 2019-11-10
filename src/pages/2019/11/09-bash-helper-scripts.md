---
title: "Bash Helper Scripts"
date: "2019-11-09"
category: "development"
tags: ['productivity']
---

Returning from a long break, I thought I'd try something totally new.  I've long been looking for a way to programmatically rebuild my laptop, so I can nuke it whenever I feel like, run a set of scripts, and have a fresh and clean operating system reloaded for me.  Since I've started using Ubuntu on my laptop, it's felt like I've been bashing my head against a wall.  Terrible joke, sorry.

Today, I'm using a few bash helper functions and different techniques to make my new Linux life easier.  

## Technicolor Terminal Output
In bash, I've found myself writing scripts and wrestling with echo, different flags, and in-line color codes to try and make output prettier, colorful, and easier to read.  I realized I was doing a bunch of extra work and that a simple helper function could solve this problem for me.  I went to the internet, found a few examples, and I've mashed them together into something concise and easy to use:
```bash
#!/bin/bash
# Color in command line messaging function
read -r error success warning notify nocolor <<<$(echo "\033[1;31m" "\033[1;32m" "\033[1;33m" "\033[1;34m" "\033[0m")
message() {
  msg="$2" && echo -e "${!1}$1:${nocolor} $2" 1>&2
}

# Examples
message error "You smashed your brain with some bash."
message success "Leveled up to hero in a bash shell!"
message warning "Writing bash can get addictive."
message notify "You're in a bash script!"
message nocolor "Plain old boring echo."
```

Copy and paste this function locally to try it out.  You'll see that you can now call the message function, giving it a type, and then a string, and you'll get color coded output in your terminal.  When writing long, involved bash scripts, this is really key, because it's easier to see your script's output and differentiate it from other programs and scripts your script has called, which may still be outputting to the terminal.

## Program Dependency Check
You'll often use bash scripts to call other programs you've already installed on your machine.  Handling errors when programs haven't been installed can be a pain, so this really simple shell script (brazenly stolen from a friend) allows you to guard against missing dependencies by requiring the user to run them before proceeding.  It's simple and straightforward.

```bash
#!/bin/bash
which jq >> /dev/null
if [ $? -eq 1 ]; then
  message error "Program required: jq"
  exit 1
fi
```

In this example, this script will check to see if the program 'jq' has been installed by checking if there's a valid executable path for it, using the 'which' command.  If there is not a path, then the entire script will exit, preventing any commands below this from running.

## Script Privilege Check
In a similar vein, you may also write bash scripts that are modifying system files.  It's generally a bad practice to have your script assume super user (sudo) access, so this simple block will test for root privileges and then close the script if the user isn't running it as sudo.  This is a great guard clause or if statement to add to any script that needs super user privileges.
```bash
#!/bin/bash
if [[ "$EUID" != 0 ]]; then
  message notify "Please assume root privileges"
  exit 1
fi
```

If the script isn't run with root, it warns the user and exits.  Simple, straight forward, elegant.

## Key-Value Pairs
One of the things about programming in bash that I miss is not having access to is an object model.  You're not going to recreate objects in bash and you really shouldn't even try.  However, you won't get far before you realize you at least need a basic key-value pair style data structure.  Luckily, bash does support associative arrays, which you can use to associate a key with a value.
```bash
#!/bin/bash
# Associative array of software names and their URLS to get version information from
declare -A downloads
downloads=(["firefox"]=https://product-details.mozilla.org/1.0/devedition.json 
           ["terraform"]=https://releases.hashicorp.com/index.json
           ["packer"]=https://releases.hashicorp.com/index.json
           ["vscodium"]=https://api.github.com/repos/VSCodium/vscodium/releases/latest
          )

# Example reference
echo ${downloads["firefox"]}
# https://product-details.mozilla.org/1.0/devedition.json
```

Using this kind of data structure, you can loop through a set of keys and, for example, download from the URLs set as each of their values.

## Conclusion
Once you add some basic window dressing to bash, I have found it much easier to do complex tasks like automating software installation.  Combining basic functions and techniques covering easy output messaging, checking for program dependencies, validating root user privileges, and using associative arrays, I have found bash extremely functional.