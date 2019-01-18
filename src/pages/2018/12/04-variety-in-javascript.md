---
title: "More VAR-iety: var, const, let"
date: "2018-12-04"
category: "development"
tags: ['javascript']
---

Excusing the horrific pun, it's great to see JavaScript support more options when it comes to variable declaration.  Let's go over them together and then it'll be easier for me to remember the nuances of each later on.

## var
The old standby.  var can place variables in either the global scope or a function's scope.  var is subject to hoisting!
```javascript
var x = 10;
```

## const
New to ES2015.  const stands for constant and it will only allow you to set a variable one time.  This property of immutability does not work on objects or arrays (since arrays in JavaScript are just a type of object).
```javascript
const YEAR = 2018;
```

It's convention to capitalize all the letters of a constant variable.

## let
New to ES2015.  let allows you to establish the block scope of a variable and it has a few special rules:
- Applys to keywords such as: if, for, while, do, try, catch, finally
- Unlike var, let does not hoist as a reference, because it exists within a temporal dead zone
- You also cannot redeclare variables using let

```javascript
let x = 10;
```