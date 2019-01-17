---
title: "Async Sugar: Promises and Generators"
date: "2018-12-17"
tags: ['learn','javascript','es2015']
---

# Promises, Promises
From an instructor on Mr. Steele's Advanced Developer Bootcamp course (a little paraphrased):

> A Promise is a one time guaranteed return of some future value.  The idea is that we do not know the value of an asynchronous operation, so we create a placeholder for that value.  When the value is figured out (or fulfilled), the promise is resolved/fulfilled or rejected.  This is a friendly way to refactor callback code.

The most common real world example of a Promise can be found in ordering food at a restaurant or a drive through. 
```javascript
function makeFastFoodOrder(){
    return new Promise(function(resolve, reject) {
        if (restaurantIsOpen) {
            if (haveIngredients) {
                resolve('Order placed!')
            } else {
                reject('Not enough ingredients to take your order!')
            }
        } else {
            reject('Restaurant is closed right now!')
        }
    })
}

makeFastFoodOrder().then(function(value) {
    console.log(value)
}).catch(function(error){
    console.log(error)
})
```

## Promise.all
- Accepts an array of promises and resolves all of them or rejects once a single one of the promises has been first rejected (fails fast).
- If all of the passed-in promises fulfill, Promise.all is fulfilled with an array of the values from the passed-in promises, in the same order as the promises passed in
- The promises don't resolve sequentially, but Promise.all waits for them
```javascript
function getMovie(title){
    return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`)
}

var titanicPromise = getMovie('titanic')
var shrekPromise = getMovie('shrek')
var braveheartPromise = getMovie('braveheart')

Promise.all([titanicPromise, shrekPromise, braveheartPromise]).then(function(movies){
    return movies.forEach(function(value){
        console.log(value.Year)
    })
})

```

# Generators Abound
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