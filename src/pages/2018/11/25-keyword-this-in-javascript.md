---
title: "Keywords 'this' and 'new' in JavaScript"
date: "2018-11-25"
category: "development"
tags: ['javascript']
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

## Keyword 'new'
Much like the keyword 'this' above, the keyword 'new' is essential to object oriented programming.  

What does 'new' actually do though?  This post breaks it down simply:
1. Creates an empty object
2. Sets 'this' = the empty object
3. Adds an instruction to return this to the end of the function that follows it
4. Adds a "__proto__" property to the empty object which links to constructor function

That's it!  Keeping this in mind will really help you understand what context you're in when using the keyword 'this', which is why these two topics were bundled together.  'This' and 'new' are inseparable parts of JavaScript.