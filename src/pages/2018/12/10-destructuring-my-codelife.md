---
title: "Destructuring my Codelife"
date: "2018-12-10"
tags: ['learn','javascript','es2015']
---

Destructuring is a new concept for me.  It means extracting values from data stored in objects and arrays.  I think it's best to illustrate with an example.  We'll start with objects:
```javascript
var dog = {
    name: "Fido",
    breed: "Labrador"
}
var dogName = dog.name;
var dogBreed = dog.breed;
```

This is manually extracting values from an object and storing them in different variables.  As you can see from the above, this could get extremely verbose if there were a lot of properties on the dog object.  Destructuring allows you to unpack properties from an object.  Here's destructuring in action:
```javascript
var dog = {
    name: "Fido",
    breed: "Labrador"
}
var { name, breed } = dog;
name // "Fido"
breed // "Labrador"
```

Here's an example if you want to reassign these variables into new names at the same time, which can really help with handling:
```javascript
var dog = {
    name: "Spike",
    breed: "Rottweiler"
}
var { name:nameOfDog, breed:breedOfDog } = dog;
nameOfDog // "Spike"
breedOfDog // "Rottweiler"
```
Destructuring allows us to extract properties from objects and store them in distinct variables.

## Destructuring Arrays
Handling individual array values could be really clunky in the old west:
```javascript
var dogs = ["Fido", "Spike", "Lady"]

var firstDog = dogs[0]
var secondDog = dogs[1]
var thirdDog = dogs[2]

firstDog // Fido
secondDog // Spike
thirdDog // Lady
```
With our new destructuring capabilities, we have access to much more succinct syntax:
```javascript
var dogs = ["Fido", "Spike", "Lady"]

var [firstDog, secondDog, thirdDog] = dogs;

firstDog // Fido
secondDog // Spike
thirdDog // Lady
```

### Swapping Values
Old school:
```javascript
function swap(a, b) {
    var temp = a
    a = b
    b = temp
    return [a, b]
}
```
New school:
```javascript
function swap(a, b) {
    return [a, b] = [b, a]
}
```