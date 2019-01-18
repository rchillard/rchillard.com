---
title: "Broken Arrows, Default Parameters"
date: "2018-12-05"
category: "development"
tags: ['javascript']
---

It's 1996.  John Travolta and Christian Slater are at the height of their powers.  What's better than a cheesy action flick?  Okay, this post isn't about [Broken Arrow](https://www.imdb.com/title/tt0115759/)... it's another post about JavaScript!

## Arrow Functions
The old school of the old school (how we used to define functions back in the day):
```javascript
function add(a, b) {
    return a + b;
}
```
The new hotness for functions that ES2015 gave us:
```javascript
let add = (a, b) => a + b;
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
Default parameters are commonly found in other languages, but for JavaScript it's a new trick.  They help save on extra code in a function typically used to handle instances where a function is called without parameters.

The old school rudimentary way to handle undefined parameters being passed:
```javascript
function add(a, b) {
    if(a === undefined) {
        a = 0;
    }
    if(b === undefined) {
        b = 0;
    }
    return a + b;
}
```

The new hotness that saves a lot of code duplication:
```javascript
function add(a=0, b=0) {
    return a + b;
}
```

So what happens now?  Well, if you call add() without parameters, now you get 0 instead of Not a Number (NaN).  As you can see, this function just got a lot cleaner and it still protects against undefined parameters being called!