---
title: "Promises, Promises"
date: "2018-12-17"
tags: ['learn','javascript','es2015']
---

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