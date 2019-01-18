---
title: "Better Object Oriented Programming in ES2015"
date: "2018-12-11"
tags: ['learn','javascript','es2015']
---

It's starting to feel like JavaScript wants to really support Object Oriented Programming.  The addition of the keyword 'class' in ES2015 makes me think of my beloved old Java.

```javascript
// constructor function in old JavaScript
function DarkLord(title, name) {
    this.title = title;
    this.name = name;
}

// creating a new instance of this object
var voldemort = new DarkLord('Lord', 'Voldemort');
```

The new hotness:
```javascript
// class declaration in ES2015
class DarkLord {
    constructor(title, name) {
        this.title = title;
        this.name = name;
    }
}

// creating a new instance of this object (it's the same)
var voldemort = new DarkLord('Lord', 'Voldemort');
```
There's a catch here though.  Classes are actually just special functions in JavaScript.  You can read more [about classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) on the MDN documents, but it's important to remember that JavaScript does not *really* support Object Oriented Programming in the traditional sense.  The new class keyword is just a piece of syntactic sugar for JavaScript.

# Instance and Class Methods
Let's have some class here, okay?  No, I mean now that we have classes in JavaScript, let's talk about how great it is to have a shorthand for both instance methods and class methods.  After all, this is the new JavaScript.

```javascript
// constructor function in old JavaScript
function DarkLord(title, name) {
    this.title = title;
    this.name = name;
}

// adds method to prototype that will appear on all instances of DarkLord
DarkLord.prototype.sayGreeting = function(){
    return "Greetings, I am " + this.title + " " + this.name;
}
```

## Instance Methods

```javascript
// class declaration in ES2015
class DarkLord {
    constructor(title, name) {
        this.title = title;
        this.name = name;
    }
    sayGreeting(){
        return `Greetings, I am ${this.title} ${this.name}`;
    }
}

// creating a new instance of this object (it's the same)
var voldemort = new DarkLord('Lord', 'Voldemort');
```

## Class Methods
In old JavaScript, class methods are placed directly on the constructor function:
```javascript
// constructor function in old JavaScript
function DarkLord(title, name) {
    this.title = title;
    this.name = name;
}

// adds method to prototype that will appear on all instances of DarkLord
DarkLord.prototype.sayGreeting = function(){
    return "Greetings, I am " + this.title + " " + this.name;
}

DarkLord.isEvil = function(obj){
    return obj.constructor === DarkLord;
}
```

In ES2015, class methods are called statics.  Creating class methods requires the use of the static keyword.
```javascript
// class declaration in ES2015
class DarkLord {
    constructor(title, name) {
        this.title = title;
        this.name = name;
    }
    sayGreeting(){
        return `Greetings, I am ${this.title} ${this.name}`;
    }
    static isEvil(obj){
        return obj.constructor === DarkLord;
    }
}

// creating a new instance of this object (it's the same)
var voldemort = new DarkLord('Lord', 'Voldemort');
```

# Inheritance
Inheritance is the process of passing properties and methods through a hierarchy of objects.

The old way of accomplishing inheritance in JavaScript:
```javascript
function Person(name, title) {
    this.title = title;
    this.name = name;
}

// adds method to prototype that will appear on all instances of DarkLord
Person.prototype.sayGreeting = function(){
    return "Greetings, I am " + this.title + " " + this.name;
}

function DarkLord(title, name) {
    this.title = title;
    this.name = name;
}

// Adding inheritance between these two: Person and DarkLord
// Set the prototype property of a constructor to be an object created from another prototype property
DarkLord.prototype = Object.create(Person.prototype);
// Reset the constructor property on a constructor function
DarkLord.prototype.constructor = DarkLord;
```
As you can see, Dark Lords are people too, or at least... they were.

## Extends Keyword
The extends keyword establishes the hierarchy for inheritance and simplifies the syntax:
```javascript
class Person {
    constructor(name, title) {
        this.title = title;
        this.name = name;
    }
    sayGreeting() {
        return `Greetings, I am ${this.title} ${this.name}`;
    }
}

class DarkLord extends Person {

}

// Test it out
DarkLord.prototype.sayGreeting
```

# Keyword 'super'
Refactoring the old constructors from ES5.  This kind of feels like how the Transformers of my childhood started (those beloved cartoons defending Earth!) vs. the new Michael Bay action-movie Transformers.  (I attended React Rally in 2018 and saw an awesome presentation by [Shirley Wu](http://sxywu.com/) comparing box offices hits and their metascores... you might guess which scored the lowest :grin:)

Okay, so we need to add a function to a 'class'.  How did we used to do that?

```javascript
function Person(title, name) {
    this.title = title;
    this.name = name;
}

Person.prototype.sayGreeting = function(){
    return "Greetings, I am " + this.title + " " + this.name;
}

function DarkLord(title, name) {
    this.title = title;
    this.name = name;
}
```

Refactored in ES5 using apply:
```javascript
function Person(title, name) {
    this.title = title;
    this.name = name;
}

Person.prototype.sayGreeting = function(){
    return "Greetings, I am " + this.title + " " + this.name;
}

function DarkLord() {
    Person.apply(this, arguments)
}
```

## Super Keyword
A new reserved keyword called 'super' finds methods in a parent class with the same name.

```javascript
class Person {
    constructor(title, name) {
        this.title = title;
        this.name = name;
    }
    sayGreeting() {
        return `Greetings, I am ${this.title} ${this.name}`;
    }
}

class DarkLord extends Person {
    constructor(title, name) {
        // you must use super here
        super(title, name)
    }
}
```
Super can only be used if a method by the same name is implemented in the parent class!

# JavaScript going from Cursive to Print
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
