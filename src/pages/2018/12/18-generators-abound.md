---
title: "Generators Abound"
date: "2018-12-18"
tags: ['learn','javascript','es2015']
---

Generators are a special kind of function which can pause execution and resume at any time.  
- They are created using a * asterisk
- When invoked, a generator object is returned to us with the keys of value and done
- Value is what is returned from the paused function using the yield keyword
- Done is a boolean which returns true when the function has completed

Here's an example:
```javascript
function* pauseAndReturnValues(num) {
    for(let i = 0; i < num; i++) {
        yield i;
    }
}

var gen = pauseAndReturnValues(5)

gen.next() // {value: 0, done: false}
gen.next() // {value: 1, done: false}
gen.next() // {value: 2, done: false}
gen.next() // {value: 3, done: false}
gen.next() // {value: 4, done: false}
gen.next() // {value: undefined, done: true}
```
Generators are useful for handling functions that are very expensive, which we may only want to run at certain times or parts of it at certain times.  This also allows you to introduce steps in large functions.

```javascript
function* pauseAndReturnValues(num) {
    for(let i = 0; i < num; i++) {
        yield i;
    }
}

for(val of pauseAndReturnValues(3)){
    console.log(val)
}
// 0
// 1
// 2
```

You can also use generators to pause asynchronous code.  This is very powerful for handling async operations and Promises.
```javascript
function* getMovieData(movieName) {
    console.log('starting')
    yield $.getJSON(`https://omdbapi.com?t=${movieName}&apikey=thewdb`)
    console.log('ending')
}

// Next value is returned as a promise, so let's resolve it:
var movieGetter = getMovieData('titanic')
movieGetter.next().value.then(val => console.log(val))
```