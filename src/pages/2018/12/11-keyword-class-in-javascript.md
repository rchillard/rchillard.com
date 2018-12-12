---
title: "Keyword 'class' in JavaScript"
date: "2018-12-11"
tags: ['learn','javascript','es2015']
---

It's starting to feel like JavaScript wants to really support Object Oriented Programming, but it's important to remember that it does not.  The addition of the keyword 'class' in ES2015 makes me think of my beloved old Java.

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