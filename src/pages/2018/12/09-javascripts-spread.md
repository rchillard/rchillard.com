---
title: "Javascipt's Spread"
date: "2018-12-09"
tags: ['learn','javascript','es2015']
---

I imagine JavaScript's Spread as being some kind of funky, really strange jam... something akin to [marmite](https://en.wikipedia.org/wiki/Marmite).

Spread operator takes an array and 'spreads' these values out into a comma separated value.  This is useful when you have an array, but what you are working with expects comma separated values.

```javascript
var keyCast = ["Christopher Nolan", "Jonathan Nolan", "Emma Thomas"];

function printExecutiveCast(director, writer, producer) {
    console.log("Director: " + director)
    console.log("Writer: " + writer)
    console.log("Producer: " + producer)
}

// Without using the spread operator, this function:
printExecutiveCast(keyCast);
// Director: Christopher Nolan,Jonathan Nolan,Emma Thomas
// Writer: undefined
// Producer: undefined

// Now, with using the spread operator, this function:

printExecutiveCast(...keyCast);
// Director: Christopher Nolan
// Writer: Jonathan Nolan
// Producer: Emma Thomas
```