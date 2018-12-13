---
title: "Introduction to Express"
date: "2018-12-30"
tags: ['learn','javascript','node','express']
---

# Express


## Setup

```javascript
// defining a dependency
var x = require("express")
// object definition
var app = express()
// serving content from public directory
app.use(express.static("public"))
```

## Database


## Routes
```javascript
app.get(route, function(request, response) {
    response.send(message)
})

// :name below identifies the parameter
app.get("/r/:name", function(request, response) {
    // assigns var from long list of request parameters
    var name = request.params.name
    response.send("You navigated to " + name)
})

app.get(route, function(request, response) {
    var name = request.params.name
    response.render(file name, {variables})
})
```

## Running the Server
```javascript
app.listen(port, IP, function)
```