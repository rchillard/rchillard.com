---
title: "Introduction to Databases"
date: "2018-11-29"
tags: ['learn','databases']
---

The time has come to crack open the old textbooks and dive back into databases.  Let's start with a very simple breakdown of the two categories of databases in the world:

| Relational    | Non-Relational |
| -----------   | ----------- |
| Ex: MySQL     | Ex: Mongo |
| Table-based   | Document-based |
| Schema        | Schema-free |
| Verticle scaling | Horizontal scaling |
| ACID transactions | Eventually consistent |
| Rows/Joins    | Denormalized |

The meaning of 'ACID' transactions is:

| Characteristic | Definition |
| ---------   | ---------- |
| Atomicity   | Each transaction treated as a single unit which succeeds completely or fails completely (self contained) |
| Consistency | Each transaction can only bring database from one valid state to another, enforcing validity in the data store |
| Isolation   | Enables concurrent execution of transactions, leaving database in the same state as if transactions were executed sequentially |
| Durability  | Transactions remain committed even in the case of a system failure (e.g. a crash), which usually means stored in durable memory |

It's important to know when you should use each type of database.  I plan on learning the most popular version in each category.  Of the database types above, the first one I am re-learning is non-relational, focusing on Mongo.  Get ready for a wild ride :)

Mongo like candy! :candy:  