---
title: "JavaScript Going from Cursive to Print"
date: "2018-12-20"
tags: ['learn','javascript','es2015']
---

Many of the updates made to JavaScript as a part of ES2015 feels like the language is going from cursive (long form) to print.  In general, the long voluminous syntax of old can now be replaced with shorter, more concise code.  That's particularly true for how objects work now.

## Object Shorthand Notation
Creating attributes on objects used to feature duplicative lines where variables were just being assigned to attributes:
The old way of doing things:
```javascript
var dogName = "Fido"
var dogBreed = "Labrador"

var myPetDog = {
    dogName: dogName,
    dogBreed: dogBreed
}
```

In the new hotness (coolness?), there's no need to repeat yourself.  You can just list the attributes:
```javascript
var dogName = "Fido"
var dogBreed = "Labrador"

var myPetDog = {
    dogName,
    dogBreed
}
```

## Object Methods
Remember that a method is a function placed on an object.  It's important to avoid arrow functions as methods, because they do not set the context of the keyword 'this' and can result in all sorts of reference errors.  As a result, methods usually looked like this in the old way:
```javascript
var dog = {
    bark: function() {
        return "Woof woof!"
    }
}
```

The new puppy is more efficient.  We don't need the function keyword or colon anymore, and we're still getting new 'this' context:
```javascript
var dog = {
    bark() {
        return "Woof woof!"
    }
}
```

## Computed Property Names
When writing the cursive of old JavaScript, it was required to create an object *before* you assigned a property to it.  Now, you can do these two things at once by using computed property names.  This cuts down on duplication and I think makes a whole lot more sense.  For comparison sake, here's the old way of doing things:
```javascript
var dogOwner = "Fido"
var dog = {}
dog[dogOwner] = "RCH!"
dog.dogOwner // "RCH!"
```

The new hotness (coolness?):
```javascript
var dogOwner = "Fido"
var dog = {
    [dogOwner]: "RCH!"
}
dog.dogOwner // "RCH!"
```

## Object.assign
Allows you to create copies of objects without the same reference

```javascript
var favoritePerson = {name: "Anakin"}
var bestFriend = favoritePerson;

bestFriend.name = "Vader"
favoritePerson.name // "Vader"
// JavaScript assigns bestFriend = as a reference to favoritePerson

// Now, with new villain powers of ES2015, we can really copy objects!
var favoritePerson = {name: "Anakin"}
var bestFriend = Object.assign({},favoritePerson);

bestFriend.name = "Vader"
favoritePerson.name // "Anakin"
```

Objects inside of the object being copied still have a reference to the original object!  Even though Anakin became Vader, references to his children still remain the same, so there isn't a deep clone.
```javascript
var innocentJedi = {name: "Anakin", children: ["Luke", "Leia"]}
var evilSithLord = Object.assign({}, innocentJedi);

evilSithLord.children.push("The Empire")

innocentJedi.children // ["Luke", "Leia", "The Empire"]
```
But that doesn't make any sense, because Anakin was just a young, innocent Jedi!  Hence, if you want to make a deep clone, you'll have to write your own method or use a library.

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