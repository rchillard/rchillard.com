---
title: "Introduction to Databases"
date: "2018-11-29"
tags: ['learn','databases']
---

The time has come to crack open the old textbooks and dive back into databases.  Let's start with a very simple breakdown of the two main families or types of databases in the world: relational and non-relational.  I put together a small table that compares the two:

| Relational           | Non-Relational |
| -----------          | ----------- |
| Ex: MySQL            | Ex: Mongo |
| Table-based          | Document-based |
| Schema-based         | Schema-free |
| Verticle scaling     | Horizontal scaling |
| Enforced consistency | Eventually consistent |
| Normalized           | Denormalized |
| Rows/Joins           | Embeds/References |

## Relational Databases
When you think of a database, you're probably thinking of a relational database.  These are structured into tables (entities), containing columns (attributes) and rows (entries).  Each row represents a unique piece of data, while columns capture attributes or properties of that single entry.  The table is a larger construct that can be thought of as encompassing an entity.

Here's a simple example of a students entity (table).  Each row is an individual student and each column represents the attributes that are important to that student.

| Unique ID | Name | Grade | Favorite Color |
| --------- | ---- | ----- | -------------- |
| 830993883 | Bob  | 8     | Orange       |
| 189399387 | Anna | 6     | Purple       |
| 352348643 | Mike | 5     | Blue         |
| 908980234 | Jena | 9     | Yellow       |

### SQL
Relational databases are also commonly referred to as Structured Query Language (SQL) databases, and although SQL is just the most prevalent language used for querying relational databases, people often use them interchangeably.  Common examples of relational databases that use SQL include MySQL and PostgreSQL.  MySQL is by far the post popular relational database.

### ACID
There's one really important acronym to remember when thinking about relational vs. non-relational databases, and that's ACID (Atomicity, Consistency, Isolation, and Durability).  ACID describes how relational database transactions happen and also captures one of the fundamental differences between relational and non-relational.  Relational databases guarantee ACID transactions.

Here's a table breaking down ACID:

| Characteristic | Definition |
| ---------   | ---------- |
| Atomicity   | Each transaction treated as a single unit which succeeds completely or fails completely (self contained) |
| Consistency | Each transaction can only bring database from one valid state to another, enforcing validity in the data store |
| Isolation   | Enables concurrent execution of transactions, leaving database in the same state as if transactions were executed sequentially |
| Durability  | Transactions remain committed even in the case of a system failure (e.g. a crash), which usually means stored in durable memory |

### A Thought
It's my opinion that most data in the world is actually relational, because most of the time we are modeling our digital systems off of our real physical world.  As a result, relational databases are much more common and serve as the workhorses of the software world.

So what's a non-relational database then?

## Non-Relational Databases
Non-relational databases or NoSQL databases are basically everything but table based databases.  They address different use cases than standard SQL databases.  I am going to explore this category in greater depth in my next post, Non-relational Databases, but the most important thing to know is that non-relational databases have a place in the world.  

It's important to know when you should use each type of database.  

I plan on learning the most popular version of non-relational databases first, MongoDB, a document-based database.  Get ready for a wild ride :)

Mongo like candy! :candy:  