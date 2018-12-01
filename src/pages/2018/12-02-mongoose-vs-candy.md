---
title: "Mongo like Candy"
date: "2018-12-01"
tags: ['learn','databases','non-relational', 'mongodb']
---

## Mongoose
```javascript
Object.findOne({matching criteria}).populate("name").exec(function (err, user){ do something })
// Return object from the database - hydrate data from the IDs - execute search with callback
```