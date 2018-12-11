---
title: "Keyword 'class' in JavaScript"
date: "2018-12-11"
tags: ['learn','javascript','es2015']
---

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