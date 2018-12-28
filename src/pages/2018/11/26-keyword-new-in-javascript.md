---
title: "Keyword 'new' in JavaScript"
date: "2018-11-26"
tags: ['learn','javascript']
---

Much like yesterday's post on the keyword 'this', the keyword 'new' is essential to object oriented programming in JavaScript.  

What does 'new' actually do though?  This post breaks it down simply:
1. Creates an empty object
2. Sets 'this' = the empty object
3. Adds an instruction to return this to the end of the function that follows it
4. Adds a "__proto__" property to the empty object which links to constructor function

That's it!  Keeping this in mind will really help you understand what context you're in when using the keyword 'this', which is why these two posts were done back-to-back.  'This' and 'new' are inseparable parts of JavaScript.