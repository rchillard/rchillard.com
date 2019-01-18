---
title: "Async Your Battleship with ES2017"
date: "2018-12-25"
category: "development"
tags: ['javascript']
---

Async functions are a special type of function that returns a Promise.  They've been designed to make Promises easier to work with.  Imagine they're kind of like all the new String methods, except since Promises are so new, they're coming about in ES2017, instead of ES2015.

I think they're a sign of the language's new speed of evolution.

Here's an example:
```javascript
async function getFlyingMoonModel() {
    return "DS-1 Orbital Battle Station"
}

getFlyingMoonModel() 
// returns a promise:
// Promise {<resolved>: "DS-1 Orbital Battle Station"}

getFlyingMoonModel().then(model => console.log(model))
// DS-1 Orbital Battle Station
```

But every Death Star needs its Luke Skywalker, and Await is the Skywalker to Async's Death Star!
(Geez, I'm really sorry about the puns.  It's very early morning, and I can't help myself.)

## Await
This is a reserved keyword that can only be used inside of an async function.  You can think of it like a big pause button for asynchronous code, because it *pauses* the execution of the async function and waits for the Promise to resolve.  

It resumes once the Promise has been resolved, returning the value of that Promise.  Now, we're cooking with proton torpedos!
```javascript
async function destroyShip(num) {
    console.log('Luke manuevers into attack position!')
    var target = await $.getJSON(`https://swapi.co/api/starships/${num}`);
    console.log(target)
    console.log(`Firing proton torpedos at ${target.name}!`)
    console.log(`${target.model} EXPLODES!`)
}

destroyShip(9)
// Luke manuevers into attack position!
// Promise {<pending>}
// {name: "Death Star", model: "DS-1 Orbital Battle Station", manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems", cost_in_credits: "1000000000000", length: "120000", …}
// Firing proton torpedos at Death Star!
// DS-1 Orbital Battle Station EXPLODES!
```

You can do the same thing on an Object's methods as well, using the new shorthand notation:
```javascript
var shipOfLuke = {
    name: "unnamed",
    async destroyShip(num){
        console.log('Luke manuevers into attack position!')
        var target = await $.getJSON(`https://swapi.co/api/starships/${num}`);
        console.log(target)
        console.log(`Firing proton torpedos at ${target.name}!`)
        console.log(`${target.model} EXPLODES!`)
    }
}
```

And you probably already guessed this, but it's easy to extend this to a Class as well:
```javascript
class Ship {
    constructor(name, owner) {
        this.name = name;
        this.owner = owner;
    }
    async destroyShip(num){
        console.log(`${this.owner} manuevers into attack position!`)
        var target = await $.getJSON(`https://swapi.co/api/starships/${num}`);
        console.log(target)
        console.log(`${this.name} fires proton torpedos at ${target.name}!`)
        console.log(`${target.model} EXPLODES!`)
    }
}

var lukesFighter = new Ship("X-Wing", "Luke")
lukesFighter.destroyShip(9)
// Luke manuevers into attack position!
// Promise {<pending>}
// {name: "Death Star", model: "DS-1 Orbital Battle Station", manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems", cost_in_credits: "1000000000000", length: "120000", …}
// X-Wing fires proton torpedos at Death Star!
// DS-1 Orbital Battle Station EXPLODES!
```

But what happens when Luke misses?  It's possible...

## Handling Errors
You have to remember to handle the failure state of a Promise as well.  You can use a try/catch statement to handle errors.

Here's an example:
```javascript
async function destroyShip(num) {
    console.log('Luke manuevers into attack position!')
    console.log('Luke fires his laser cannons!!')
    try {
        var target = await $.getJSON(`https://swapi.co/api/starships/${num}`);
        console.log(target)
        console.log(`Luke hits ${target.name} with a laser blast!`)
    } catch(err) {
        console.log('Luke misses!')
    }
}

// Success case (the try block)
destroyShip(9)
// Luke manuevers into attack position!
// Luke fires his laser cannons!!
// Promise {<pending>}
// {name: "Death Star", model: "DS-1 Orbital Battle Station", manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems", cost_in_credits: "1000000000000", length: "120000", …}
// Luke hits Death Star with a laser blast!

// Failure case (the catch block)
destroyShip(XMLDocument) // invalid input for this API
// Luke manuevers into attack position!
// Luke fires his laser cannons!!
// Promise {<pending>}
// GET https://swapi.co/api/starships/function%20XMLDocument%28%29%20%7B%20%5Bnative%20code%5D%20%7D/ 404
// Luke misses!
```

## Long Response Promises and Performance
In our metaphor, imagine that some ships take longer to blow up than others.  There's no reason why a starship pilot shouldn't be able to attack the next target, while his proton torpedos travel to the first, right?  

Let's see a really slow example that waits for each request to resolve before moving on to the next one:
```javascript
async function destroyShip(...nums) {
    for(let num of nums) {
        console.log('Luke manuevers into attack position!')
        var target = await $.getJSON(`https://swapi.co/api/starships/${num}`);
        console.log(`Luke hits ${target.name} with a laser blast!`)
    }
}

destroyShip(9, 10, 11)
// Luke manuevers into attack position!
// Promise {<pending>}
// Luke hits Death Star with a laser blast!
// Luke manuevers into attack position!
// Luke hits Millennium Falcon with a laser blast!
// Luke manuevers into attack position!
// Luke hits Y-wing with a laser blast!
```
This was really, really slow.  It took maybe 10 seconds total, when I tested it in my Chrome console.

And now, what if we make these requests in parallel (asynchronously)?
```javascript
async function destroyShip() {
    var attackShip1 = $.getJSON('https://swapi.co/api/starships/9')
    var attackShip2 = $.getJSON('https://swapi.co/api/starships/10')
    var attackShip3 = $.getJSON('https://swapi.co/api/starships/11')

    var ship1Result = await attackShip1;
    var ship2Result = await attackShip2;
    var ship3Result = await attackShip3;

    console.log(ship1Result)
    console.log(ship2Result)
    console.log(ship3Result)
}

// destroyShip()
// Promise {<pending>}
// {name: "Death Star", model: "DS-1 Orbital Battle Station", manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems", cost_in_credits: "1000000000000", length: "120000", …}
// {name: "Millennium Falcon", model: "YT-1300 light freighter", manufacturer: "Corellian Engineering Corporation", cost_in_credits: "100000", length: "34.37", …}
// {name: "Y-wing", model: "BTL Y-wing", manufacturer: "Koensayr Manufacturing", cost_in_credits: "134999", length: "14", …}
```
That took no time at all!  Maybe 1 second?  The benefits of making parallel calls!

But what if we want to make something more dynamic like our original function that can accept ships?

## Await with Promise.all
Let's get crazy.  Like... Luke Skywalker taking on the Death Star crazy!

```javascript
async function destroyShips(...nums) {
    var shipList = []
    // Assemble an Array of Promises, but make all requests in parallel
    for(let num of nums) {
        shipList.push($.getJSON(`https://swapi.co/api/starships/${num}`));
    }

    // Wait for an Array of Promises to resolve
    var targetList = await Promise.all(shipList)

    // Print out the results after Promise.all finishes
    console.log("Following targets destroyed: ")
    for(let target of targetList) {
        console.log(target)
    }
}

destroyShips(9,10,11)
// Following targets destroyed: 
// {name: "Death Star", model: "DS-1 Orbital Battle Station", manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems", cost_in_credits: "1000000000000", length: "120000", …}
// {name: "Millennium Falcon", model: "YT-1300 light freighter", manufacturer: "Corellian Engineering Corporation", cost_in_credits: "100000", length: "34.37", …}
// {name: "Y-wing", model: "BTL Y-wing", manufacturer: "Koensayr Manufacturing", cost_in_credits: "134999", length: "14", …}
```
That happened in maybe 1-2 seconds?  That was awesome!

The nice part about this kind of pattern is that even though the code is async, it's still easy to read.