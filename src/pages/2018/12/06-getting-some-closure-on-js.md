---
title: "Getting Some Closure on JavaScript"
date: "2018-12-06"
category: "development"
tags: ['javascript']
---

You hear developers in the JavaScript world talk about closure.  I always thought it was about getting over the demise of Netscape Navigator.  Boy was I wrong!  (Sorry, horrible joke... sorry not sorry Netscape)

Closure in JavaScript is actually when an inner function makes use of variables declared in an outer function which has previously returned.  Put another way, closures use data from an outer function to return data with an inner function.

The most common reason to implement a closure is to protect variables you want to keep private and inaccessible.  Here's a simple example:

```javascript
function count() {
    // this is the variable we want to protect
    var counter = 0;
    
    // this unnamed function is our closure
    return function() {
        return ++counter;
    }
}
```