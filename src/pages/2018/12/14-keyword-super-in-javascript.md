---
title: "Keyword 'super' in JavaScript"
date: "2018-12-14"
tags: ['learn','javascript','es2015']
---

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