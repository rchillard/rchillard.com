---
title: "Broken Arrows, Default Parameters"
date: "2018-12-05"
tags: ['learn','javascript','es2015']
---

## Arrow Functions

The old school of the old school (how we used to define functions back in the day):
```javascript
function add(a,b) {
    return a + b;
}
```
The new hotness for functions that ES2015 gave us:
```javascript
let add = (a,b) => a + b;
// You must declare your new arrow function as a variable: let add
// Parameters of function are defined next: = (a,b)
// Arrow function is almost equivalent to function: =>
// No return statement necessary if only a single line: a + b;
```

Arrow functions are [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar), making function declaration more concise.

There are some important catches or gotchas to remember with arrow functions though:
- Arrow functions do NOT get their own "this" keyword
- Within an arrow function, "this" is the enclosing context you find the arrow function in
- For the above reason, it's a best practice to never use arrow functions as methods on objects

## Default Parameters