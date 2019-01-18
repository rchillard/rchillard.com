---
title: "The Brave New JavaScript: Better Strings"
date: "2018-12-03"
category: "development"
tags: ['javascript']
---

Wow, I'm only a few days into learning how much JavaScript changed in 2015 with the release of ES2015, but I am already excited.  

## My First Sad Try
When I first tried to learn ReactJS this last summer, I was shocked at how much basic syntax I did not recognize.  I made the mistake of attending a workshop on React without knowing any of this new syntax.  The instructor kept talking about arrow functions, object destructuring, and all kinds of other terms that I did not recognize.  I was so lost.  It was really disheartening. :crying_cat_face:

I felt like [an impostor](https://en.wikipedia.org/wiki/Impostor_syndrome).  It seemed that I had stepped into a [Brave New World](https://en.wikipedia.org/wiki/Brave_New_World), and I was trapped in a code dystopia that made me feel like an Epsilon.

## My Revelation
I had a revelation though.  I had to approach this brave new JavaScript like it was a totally new language.  I decided to try out Colt Steel's [Advanced Web Developer Bootcamp](https://www.udemy.com/the-advanced-web-developer-bootcamp/) on Udemy, and lo and behold, the course has a ReactJS pathway and a prerequisite to the actual React content is first learning and mastering ES2015.

As a result, I'll be highlighting a lot of my ES2015 learnings in the next few weeks on this blog.

## Template Strings
As an example of the brave new world, JavaScript now supports a common feature in other languages: string interpolation!  Of course, JavaScript had to give it its own name: template strings.  This primarily makes string concatenation easier as well as adds support for multiline strings.  The important thing to remember is that you have to use the backtick ` character in place of a quotation mark.

Here's how we used to do things:
```javascript
var firstName = "Rand"
var lastName = "al'Thor"
var announcement = "I am the Lord of the Morning, my name is " + firstName + " of house " + lastName
console.log(announcement)
```

Saving those plus signs (they're endangered! we've got way more backticks to spare):
```javascript
var firstName = "Rand"
var lastName = "al'Thor"
var announcement = `I am the Lord of the Morning, my name is ${firstName} of house ${lastName}`
console.log(announcement)
```
Isn't that a lot nicer?

And here's a multi-line example of a String:
```javascript
`
This
type
of
string
actually
works
now!
`
```
What other String functions have they *included* in ES2015?

## includes
Returns 'true' if a value is found inside of a String, which is easier than using indexOf
```javascript
// Old way
"batman".indexOf("man") > -1 // true
// New way
"batman".includes("man") // true
```

Come and join me on my journey to become a coding Alpha and conquer this brave new JavaScript.

Here's a quick additional freebie on numbers:
## Number.isFinite
This is a short cut way to tell if a number is Not a Number (NaN):
```javascript
function checkIfNumber(val) {
    if (Number.isFinite(val)) {
        return "It's a number!"
    }
}
```