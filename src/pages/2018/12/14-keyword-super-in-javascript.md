---
title: "Keyword 'super' in JavaScript"
date: "2018-12-14"
tags: ['learn','javascript','es2015']
---

Refactoring the old constructors from ES5.

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