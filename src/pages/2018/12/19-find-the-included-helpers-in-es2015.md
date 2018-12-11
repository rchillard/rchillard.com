---
title: "Find the Included Helpers in ES2015"
date: "2018-12-19"
tags: ['learn','javascript','es2015']
---

Finally, they've made Arrays easy to work with in ES2015.  I can't believe I'm saying this.  It's great though!  I kind of feel like ES2015 represents years of pent up anger over For loops.  Check this out:

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

## includes
Returns 'true' if a value is found inside of a String, which is easier than using indexOf
```javascript
// Old way
"batman".indexOf("man") > -1 // true
// New way
"batman".includes("man") // true
```

## Number.isFinite
This is a short cut way to tell if a number is Not a Number (NaN):
```javascript
function checkIfNumber(val) {
    if (Number.isFinite(val)) {
        return "It's a number!"
    }
}
```