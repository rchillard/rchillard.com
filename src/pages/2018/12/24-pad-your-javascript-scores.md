---
title: "Pad Your JavaScript Scores"
date: "2018-12-24"
tags: ['learn','javascript','es2017']
---

New String methods for you!

## padStart

```javascript
"Chapter 9".padStart(15, '>')
"Chapter 10".padStart(15, '>')
"Chapter 11".padStart(15, '>')

// ">>>>>>Chapter 9"
// ">>>>>Chapter 10"
// ">>>>>Chapter 11"

let chapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function printChapters() {
    console.log("CONTENTS".padEnd(15, '='))
    for(let chapter of chapters) {
        let str = "Chapter " + chapter
        console.log(str.padStart(15, '>'))
    }
    console.log("END".padEnd(15, '='))
}

```
## padEnd


## Padding Your JavaScript Output
Here's a practical example for how you might use these new powers over the String:
```javascript
let chapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function printChapters() {
    console.log("CONTENTS".padEnd(15, '='))
    for(let chapter of chapters) {
        let str = " Chapter " + chapter
        console.log(str.padStart(15, '>'))
    }
    console.log("END".padEnd(15, '='))
}

// Output
// CONTENTS=======
// >>>>>>Chapter 1
// >>>>>>Chapter 2
// >>>>>>Chapter 3
// >>>>>>Chapter 4
// >>>>>>Chapter 5
// >>>>>>Chapter 6
// >>>>>>Chapter 7
// >>>>>>Chapter 8
// >>>>>>Chapter 9
// >>>>>Chapter 10
// >>>>>Chapter 11
// >>>>>Chapter 12
// >>>>>Chapter 13
// >>>>>Chapter 14
// >>>>>Chapter 15
// END============
```