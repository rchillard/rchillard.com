---
title: "Maps to New Treasure"
date: "2018-12-15"
tags: ['learn','javascript','es2015']
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