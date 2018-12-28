---
title: "Instance and Class Methods"
date: "2018-12-12"
tags: ['learn','javascript','es2015']
---

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