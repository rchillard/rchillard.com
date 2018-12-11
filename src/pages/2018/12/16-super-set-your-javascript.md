---
title: "Super Set Your JavaScript"
date: "2018-12-16"
tags: ['learn','javascript','es2015']
---

You know we're not exercising here.  No, I'm talking about the new Set data structure in JavaScript.  Sets are common in other languages (like my old school Java) and this follows a pattern that I have noticed in ES2015.  It increasingly feels like ES2015 is bringing JavaScript up to parity with other languages.

## Set Characteristics
- All values in a set are unique
- Any type of value can exist in a set
- Created using the 'new' keyword

```javascript
var mySet = new Set
var myOtherSet = new Set([1,2,3,4,5,1,2]) // [1,2,3,4,5]

// Add allows you to include entries
mySet.add(1) // {1}
mySet.add(2) // {1, 2}
mySet.add(2) // {1, 2}
// Set enforces unique values so does not accept 2nd '2'

// Easily see the size of a Set
mySet.size // 2

// Determine if value exists
mySet.has(2) // true

// Delete a value
mySet.delete(2) // true
mySet.size // 1

myOtherSet[Symbol.iterator] // function(){}...
```

## WeakSet
- All values must be objects
- Values in a WeakSet can lose their references
- More performant than Sets but can not be iterated over