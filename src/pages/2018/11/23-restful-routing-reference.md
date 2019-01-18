---
title: "RESTful Routing Reference"
date: "2018-11-23"
category: "development"
tags: ['api']
---

I wanted to take a second to capture a basic guide for myself on RESTful routing.  REST stands for Representational State Transfer and is essentially a design pattern for creating web services.  To future me, this table should help with any future REST API design:

| Type         | URL Path          | Method        | Action        |
| ------------ | -------------     | ------------- | ------------- |
| Index        | /dogs             | GET           | List all dogs |
| New          | /dogs/new         | GET           | Form to create new dog |
| Create       | /dogs             | POST          | Add new dog to database  |
| Show         | /dogs/:id         | GET           | Show a single dog's data |
| Edit         | /dogs/:id/edit    | GET           | Show edit form for a dog |
| Update       | /dogs/:id         | PUT           | Update a single dog data |
| Destroy      | /dogs/:id         | DELETE        | Remove a single dog data |

It's important to memorize this pattern, because the predictability in it is the basis for many web services.  If you understand REST, and a RESTful API has been designed, then you can expect this type of pattern and more easily integrate with it.