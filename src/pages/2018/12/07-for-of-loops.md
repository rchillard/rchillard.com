---
title: "For...of Loops"
date: "2018-12-07"
tags: ['learn','javascript','es2015']
---

ES2015 feels JavaScript's triple scoop waffle icecream cone--it has so much syntactic sugar!  One scoop of the cone is the For...Of Loop.  This type of loop is particularly useful for iterating over arrays.  In code, an example looks like this:

```javascript
var stooges = ["Larry","Moe","Curly"];

for(let member of stooges){
    console.log(member);
}

// Larry
// Moe
// Curly
```

## How does this work though?
Well, it depends on a new function that is part of the array object called Symbol.iterator.  This is really important, because it means this style of loop will not work on generic objects.  For...of can only be used on a data structure that has the Symbol.iterator implemented.