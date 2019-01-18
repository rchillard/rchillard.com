---
title: "Framework vs. Library"
date: "2018-11-24"
category: "development"
tags: ['architecture']
---

For years, I have found myself using framework and library interchangeabley.  That's just wrong.  

I never knew it until now, but these two are very different.  The key sits in understanding a scary sounding concept called inversion of control.  Here's the textbook definition [from Wikipedia](https://en.wikipedia.org/wiki/Inversion_of_control):
> In software engineering, inversion of control (IoC) is a design principle in which custom-written portions of a computer program receive the flow of control from a generic framework. A software architecture with this design inverts control as compared to traditional procedural programming: in traditional programming, the custom code that expresses the purpose of the program calls into reusable libraries to take care of generic tasks, but with inversion of control, it is the framework that calls into the custom, or task-specific, code.

## What does all that mean though?
When you include a library in your code, you're maintaining control over the library, because you choose when to call any methods or functions you've imported.  However, with a framework, there's inversion of control, because frameworks generally define their own control structure.  If you choose to use a framework, you're giving up some agency to that framework.

Here's an easier way to understand this concept, by looking at each side-by-side:

| Framework   | Library     |
| ----------- | ----------- |
| Decisions are already made for you | You are in control of decisions |
| Contains scaffolding code | A collection of functionality that you call |
| Flow of control is defined already | Unopinionated means more flexible |

In short, inversion of control in frameworks is like one of Yakov Smirnoff's old jokes.  Framework calls you!

I would never have understood this if not for Colt Steele's formidable [Web Developer Bootcamp](https://www.udemy.com/the-web-developer-bootcamp/).  If you're interseted in learning web development, or you're just a dinosaur like me trying to update your skills, I highly recommend checking it out.
