---
title: "Love to Hate JavaScript"
date: "2018-12-22"
category: "development"
tags: ['javascript']
---

After a half a month of joyful posts about JavaScript's ES2015 (also called ES6), I decided to get a little grinchy before the holiday.  Here's something that tripped me up for the last hour or so.  I wanted to share where not *quite* understanding the new notation completely can get you in trouble.

## .map on Arrays
The map() method creates a new array with the results of calling a function for every array element.  Wait, so like a For loop?  That's right!  Finally, a replacement for the onerous For loop. 

:pray: Bless you JavaScript, each and every new version of you!  :gift_heart:

Here's what that looks like in practice:
```javascript
let movies = [
  "Jaws",
  "Jurassic Park",
  "Saving Private Ryan"
]

for(let i = 0; i < movies.length; i++) {
  console.log(movies[i])
}
// Jaws
// Jurassic Park
// Saving Private Ryan

movies.map(movie => console.log(movie))
// Jaws
// Jurassic Park
// Saving Private Ryan
```
If you don't find the above sexy, I can't help you.  That's awesome!  Simplified syntax, easier to read, easier to write, it's all wins for JavaScript ES2015, as far as I'm concerned.  Sweet victory!

## Hold on Turbo
But wait... there's a catch with a really special edge case (I thought about refraining from even posting this, but I experienced enough anguish that I think it's worth it, even if I only save one other person (future me) from experiencing it again.  Now, let's say you want to do something interesting like cast your array values into an array of objects:
```javascript
let movies = [
  "Jaws",
  "Jurassic Park",
  "Saving Private Ryan"
]

for(let i = 0; i < movies.length; i++) {
  movies[i] = { title: movies[i] }
}

console.log(movies)
// [ { title: 'Jaws' },
//   { title: 'Jurassic Park' },
//   { title: 'Saving Private Ryan' } ]
```
As you can see, this works great with the good old, trustworthy, reliable For loop.  

How about with the new hotness?
```javascript
let movies = [
  "Jaws",
  "Jurassic Park",
  "Saving Private Ryan"
]

movies = movies.map(movie => { title: movie })

console.log(movies)
// [ undefined, undefined, undefined ]
```
Wait, hold on.  That's not right!  I should be getting an array of *objects* back, right?

I did everything right!
- I used object literal notation { } to cast the value to an object, just as I did in the regular for loop
- It's a one line arrow function, so I don't need to include function notation { } or a return statement (they're implicit!)

So, what happened!?  Why is everything undefined?  ES2015 doesn't love me! :cry:

## Confusing JavaScript
I just confused JavaScript!  If I'm returning an object inside of a one line arrow function, JavaScript can't tell the difference between the function notation and my object literal notation.  It thinks my { } is actually a part of the function, so nothing is being returned.  In this case, I need to explicitly tell JavaScript that this is an expression by including an extra pair of parenthesis:
```javascript
movies = movies.map(movie => ({ title: movie }))
```
And it works!  :joy_cat:

A good way to clearly see this problem is to compare it to a multi-line arrow function *with a return statement*:
```javascript
let movies = [
  "Jaws",
  "Jurassic Park",
  "Saving Private Ryan"
]

movies = movies.map(movie => {
  return { title: movie }
  }
)

console.log(movies)
// [ { title: 'Jaws' },
//   { title: 'Jurassic Park' },
//   { title: 'Saving Private Ryan' } ]
```
This also works, because now JavaScript knows exactly what to do.

I spent an hour tonight shaking the magic :8ball: trying to figure this out, so I thought I'd share it in case it helps someone else out.