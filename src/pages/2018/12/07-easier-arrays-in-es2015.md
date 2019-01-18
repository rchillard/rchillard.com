---
title: "Easier Arrays: Array.from, find, findIndex, For...of"
date: "2018-12-07"
tags: ['learn','javascript','es2015']
---

Finally, they've made Arrays easy to work with in ES2015.  I can't believe I'm saying this.  It's great!  I kind of feel like ES2015 represents years of pent up anger over developers having to manually traverse Arrays using For loops.  Check these changes out:

## Array.from
Enables you to convert other data types into arrays.
```javascript
// Convert array-like-objects into arrays
var divs = document.getElementsByTagName("div")
var converted = Array.from(divs)

// Convert different types of objects into arrays
var firstSet = new Set([1,2,3,4,3,2,1]) // {1,2,3,4}
var arrayFromSet = Array.from(firstSet) // [1,2,3,4]
```

## find
New method that can be invoked on arrays:
- Accepts a callback with value, index and array (just like forEach, map, filter, etc.)
- Returns the value found or 'undefined' if not found

No longer necessary to use a For loop to find an individual value inside of an array!
```javascript
let movies = [{title: "Jaws", year: 1975}, {title: "Jurassic Park", year: 1993}, {title: "Saving Private Ryan", year: 1998}]

movies.find(function(val) {
    return val.year === 1975
}) // { title: 'Jaws', year: 1975 }
```

## findIndex
You can do the same with findIndex, except that this function returns and index or -1 if the value is not present:
```javascript
let movies = [{title: "Jaws", year: 1975}, {title: "Jurassic Park", year: 1993}, {title: "Saving Private Ryan", year: 1998}]

movies.findIndex(function(val) {
    return val.year === 1998
}) // 2 (the index of the 3rd item in the array)
```

# For...of Loop
ES2015 feels like JavaScript's triple scoop waffle icecream cone--it has so much syntactic sugar!  One scoop of the cone is the For...Of Loop.  This type of loop is particularly useful for iterating over arrays.  In code, an example looks like this:

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