---
title: "New Data Structures: Set Map to Treasure"
date: "2018-12-15"
category: "development"
tags: ['javascript']
---

Despite the title, I'm not a pirate on the high seas here.  What is a Map?
A Map is a collection of key-value pairs where the keys do not have to be strings.  In other languages, this is often called a hash map.

```javascript
// Use the 'new' keyword to create a Map
var myMap = new Map;

// Add new entries via the .set function
myMap.set(1, 'Frog')
myMap.set(false, 'a boolean')
myMap.set('shoelaces', 'a string')

// Delete a key-value pair
myMap.delete('shoelaces') // true

// Easily retrieve the size 
myMap.size // 2

// Retrieve values by their keys
myMap.get(1) // 'Frog'
myMap.get(false) // 'a boolean'
```

Keys can actually be any type, including arrays and objects.  This makes Maps very powerful!
```javascript
var arrayKey = []
myMap.set(arrayKey, [1,2,3,4,5])

var objectKey = {}
myMap.set(objectKey, {a:1})

myMap.get(arrayKey) // [1,2,3,4,5]
myMap.get(objectKey) // {a:1}
```

To demonstrate the ease of iteration over a map see the example below:
```javascript
myMap.forEach(x => console.log(x))

// 'Frog'
// 'a boolean'
// [1,2,3,4,5]
// {a:1}

// You can also use the Symbol.iterator or for...of loop
myMap.values() // MapIterator of values
myMap.keys() // MapIterator of keys

// Example of a for...of loop to traverse values
for (var value of myMap.values()) {
    console.log(value)
}
```

## Why use Maps?
- Finding the size is easy
- Keys can be any data types
- Iterating over keys and values is very easy

## When do you use Maps?
- If you need to look up keys dynamically (they are not hard coded)
- If you need keys that are not strings
- If you are frequently adding or removing key/value pairs
- If you are operating on multiple keys at a time

## WeakMap
- Similar to a Map except all the keys must be objects
- Values in a WeakMap can lose their references
- More performant than Maps but can not be iterated over

# Super Set Your JavaScript
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