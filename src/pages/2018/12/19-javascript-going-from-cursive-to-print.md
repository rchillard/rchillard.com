---
title: "JavaScript Going from Cursive to Print"
date: "2018-12-19"
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