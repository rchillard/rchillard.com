[sane.html](https://github.com/rchillard/sane.html)| [Table of Contents](README.md)

# JavaScript

Information about the default JavaScript included in the project.

## main.js

This file can be used to contain or reference your site/app JavaScript code. 

## plugins.js

This file can be used to contain all your plugins.

By default the `plugins.js` file contains a small script to avoid `console`
errors in browsers that lack a `console`. The script will make sure that, if a
console method isn't available, that method will have the value of empty
function, thus, preventing the browser from throwing an error.

## vendor

This directory can be used to contain all 3rd party library code.  In general, you should try to limit the amount of 3rd party code you need for a website.  However, sometimes it's absolutely necessary to include a vendor package.  

When you do, you should try to limit yourself to packages with 0 of their own dependencies.  Two examples of highly valuable (you should not do it yourself) yet low complexity (you can read and understand the entire source in a short time) packages would be:
- [awesomplete](https://github.com/leaverou/awesomplete) - ultra lightweight autocomplete
- [DOMPurify](https://github.com/cure53/DOMPurify) - super-fast XSS sanitizer for HTML and SVG
