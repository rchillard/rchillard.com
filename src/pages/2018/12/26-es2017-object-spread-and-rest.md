---
title: "ES2017: Object Spread and Rest"
date: "2018-12-26"
category: "development"
tags: ['javascript']
---

Once again, the speed of JavaScript evolution is apparent.  When you learn it all together, it's easier to see how an idea is being iterated upon.  In this case, the Rest and Spread operators we learned in ES2015 for dealing with arguments in functions and arrays are being adopted for similar uses, except for objects. 

## Object Spread
The Object Spread operator allows you to *spread out* keys and values from one object to another.

```javascript
var hero1 = {first:"Luke", last:"Skywalker", father:"Anakin", mother:"Padme", born:"Starship", powerLevel:7}
var hero2 = {...hero1, first:"Leia", last:"Solo"}
```
In this example above, we are mapping the extra keys that are the same (for Luke's twin, Leia) onto the hero2 object, and then we are updating the first and last name keys to represent that this is a new person.  Since they're twins, they share things in common.

The order here is important, because the Object Spread operator is going to spread out *all* the keys and values.  If we were to do this after we assigned the first and last name, then hero2 would just be a copy of hero1.

## Object Rest
The Object Rest operator gathers the remaining (the rest) of the keys and values in an object and create a new object out of them.

An example is often worth a thousand blog posts:
```javascript
var hero = {first:"Luke", last:"Skywalker", role:"Jedi", pilot:true, powerLevel:7}

// Destructure the hero object and put remaining keys/values into the 'other' variable
var { first, last, ...other } = hero
first // Luke
last // Skywalker
other // { role:"Jedi", pilot:true, powerLevel:7 }
```