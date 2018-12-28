---
title: "Keyword 'this' in JavaScript"
date: "2018-11-25"
tags: ['learn','javascript']
---

The 'this' keyword represents a core part of object oriented programming in JavaScript.  You have to understand how 'this' operates in different contexts and its rules to really maximize your use of the language.  Rules of 'this':
1. Applies to the nearest parent object
2. 'This' can be set as one of these:
  - Global context
  - Object binding
  - Explicit binding
  - Through 'new' keyword
3. Methods 'call, apply, bind' explicitly set the value of 'this'
4. The 'new' keyword creates a new object and 'this' applies to the new object

Here's a basic chart of those prototype methods that operate on 'this':

| Name  | Parameters             | Invocation |
| ----- | ---------------------  | ---------- |
| Call  | this, a, b, c, d, ...  | immediate  |
| Apply | thisArg,[a, b, c, ...] | immediate  |
| Bind  | thisArg, a, b, c, ...  | delayed    |

- 'Call' enables explicit binding by allowing you to specify the context in which a function will be invoked
- 'Apply' is very similar to 'call', but you must pass arguments as an array
- 'Bind' returns a function definition with 'this' = thisArg passed to it
- 'Bind' can be used to set the context of 'this' in asynchronous code

Greater minds than mine have explained some of these concepts in much greater detail, so I will [refer you to them](https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/) for further reading.