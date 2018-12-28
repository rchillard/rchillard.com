---
title: "Non-Relational Databases"
date: "2018-11-30"
tags: ['learn','databases','non-relational']
---

Of the two major categories of databases, I plan on learning a little bit about non-relational databases first.  Before I get into a specific one though, here's a table of the different *types* of non-relational databases:

| Type           | Example         | Utilized For |
| -----------    | -----------     | -----------  |
| Document       | Mongo           | Groups of key-value pairs, able to be nested to depths, fluid schema means flexibility, fast to build on |
| Key-value      | Redis           | Simple key-value stores, scaling well, but does not support complex queries, so suited for simple data |
| Column         | Cassandra       | Designed for retrieval of large amounts of a particular column (attribute), benefiting analytic applications |
| Graph          | Neo4J           | Used for interconnected data and strong at traversing connections between nodes |

## Document
Document-based databases have fluids schemas, which means individual entries in the database can have differently shaped data.  This is really powerful, because it means you can prototype an application rapidly (with data persistence) without needing to design an entire SQL database.  When you build a proof of concept or prototype, you know the least about your problem space, so you're probably going to throw away huge swathes of your work, as you learn more about the project.  You're building something to learn, so you can iterate into a better version later.

A document-based database like MongoDB is perfect for that.  That's why I'm learning it first.

## Key-value
Key-value databases are essentially a data dictionary in database format.  They can be deployed in cases where you have a simple data structure but need speed and efficiency.  The most common use case for this type of database is caching.

## Column
I know column-based databases are used in big data and analytics, but I don't really understand the advantages they represent.  Frankly, I understand this type the least.  
Future me will dig into this at a later date. :bowtie:

## Graph
Graph databases provide a permanent way to store the (wait for it!) graph type of data structure.  I know... you're as surprised as I am.  Seriously though, this type of database excels at storing things like maps of roads :globe_with_meridians:.  Future me will investigate further.  I've already got a sample project in mind.

## Conclusion
Each of these types should be used for different purposes, but the most common all around utility type is a document-based database, because it has a fluid schema.  The most popular document database is [MongoDB](https://www.mongodb.com/).  I am learning it first, because the fluid schema and API available as part of a document-based database makes it easy to quickly prototype systems and applications.  As part of my learning process, I want to build as many things as possible, as quick as I can, and MongoDB enables me to do that.

Checkout my next post, Mongo like Candy, for a deeper dive.  I warned you about the throwbacks!