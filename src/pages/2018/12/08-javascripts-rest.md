---
title: "JavaScript's Rest"
date: "2018-12-08"
tags: ['learn','javascript','es2015']
---

The rest operator collects the remaining arguments of a function and exposes them as an array that's available within a function.  This is useful for functions where there are an undetermined number of parameters being passed, but you still need to handle those parameters within the function.  Here's an example in code below:

```javascript
function printCast(director,writer,producer,...cast) {
    console.log(director);
    console.log(writer);
    console.log(producer);
    console.log(cast);
}

printCast("Christopher Nolan", "Jonathan Nolan", "Emma Thomas", "Matthew McConaughey", "Anne Hathaway", "Jessica Chastain");

// Christopher Nolan
// Jonathan Nolan
// Emma Thomas
// ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
```
Can you guess what movie?  It's one of [my favorites](https://www.imdb.com/title/tt0816692/).

Here are some important rules to keep in mind when using the rest operator:
- It always returns an array
- It's accessed within the function by referencing the name directly (not the ...)
- The '...' is only considered the rest operator when used with parameters in a function