---
title: "Pad Your ES2017 JavaScript Scores"
date: "2018-12-24"
category: "development"
tags: ['javascript']
---

ES2017 brings new String methods for us, which honestly, feel a little weird.  I think they're mostly in response to the famous [leftpad incident](https://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/), whereby a disgruntled developer brought a shocking number of apps to their knees by removing an NPM package that thousands of projects depended upon.

## padStart
Pad the beginning of a string, specifying the total number of characters and the character to do the padding:
```javascript
"Chapter 9".padStart(15, '>')
"Chapter 10".padStart(15, '>')
"Chapter 11".padStart(15, '>')

//  >>>>>>Chapter 9"
//  >>>>>Chapter 10"
//  >>>>>Chapter 11"
```
## padEnd
Pad the end of a string, specifying the total number of characters and the character to do the padding:
```javascript
"Chapter 9".padEnd(15, '>')
"Chapter 10".padEnd(15, '>')
"Chapter 11".padEnd(15, '>')

//  Chapter 9>>>>>>
//  Chapter 10>>>>>
//  Chapter 11>>>>>
```

## Padding Your JavaScript Output
Here's a practical example for how you might use these new powers over the String:
```javascript
let chapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function printChapters() {
    console.log("CONTENTS ".padEnd(15, '='))
    for(let chapter of chapters) {
        let str = " Chapter " + chapter
        console.log(str.padStart(15, '.'))
    }
    console.log("END ".padEnd(15, '='))
}

// Output
// CONTENTS ======
// ..... Chapter 1
// ..... Chapter 2
// ..... Chapter 3
// ..... Chapter 4
// ..... Chapter 5
// ..... Chapter 6
// ..... Chapter 7
// ..... Chapter 8
// ..... Chapter 9
// .... Chapter 10
// .... Chapter 11
// .... Chapter 12
// .... Chapter 13
// .... Chapter 14
// .... Chapter 15
// END ===========
```

See?  Beautiful output, formatted in line with plenty of auto-magic padding!