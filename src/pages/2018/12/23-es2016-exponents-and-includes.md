---
title: "ES2016: Exponents and Includes"
date: "2018-12-23"
category: "development"
tags: ['javascript']
---

I'm starting to feel like a broken record, but once again, JavaScript ES2016 jumps into 2009 with a few nifty features!  (I kid, I kid, these updates are great for the language and although small in the grand scheme of the other things, they're important to recognize.)

## Exponentiation Operator **
A real math operator for exponents!  How'd it take so many years?
```javascript
var calculatedNumber = 2**4
calculatedNumber // 16
```
What else got *included* this year?  (I'm sorry--this joke is too easy!)
## [].includes
Remember the .includes function introduced for Strings in ES2015?  Well, ES2016 capitalizes on that victory by adding a [].includes method that works exactly as the String method does, except on Arrays!
```javascript
var nums = [1,2,3,4,5]
nums.includes(2) // true
nums.includes(7) // false
```