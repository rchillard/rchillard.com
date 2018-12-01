---
title: "Non-Relational Databases"
date: "2018-11-30"
tags: ['learn','databases','non-relational']
---

Of the two major categories of databases, I plan on learning a little bit about non-relational databases first.  Before I get into a specific one though, here's a map of the different *types* of non-relational databases:

| DB Type     | Example | Utilized For |
| -----------    | -----------     | -----------  |
| Document | Mongo     | Groups of key-value pairs, able to be nested to depths, fluid schema means flexibility, fast to build on |
| Key-value      | Redis     | Simple key-value stores, scaling well, but does not support complex queries, so suited for simple data |
| Column   | Cassandra | Designed for retrieval of large amounts of a particular column (attribute), benefiting analytic applications |
| Graph          | Neo4J     | Used for interconnected data and strong at traversing connections between nodes |

Each of these types should be used for different purposes, but the most common all around utility type is a document-based database, because it has a fluid schema.  The most popular in this category is [MongoDB](https://www.mongodb.com/).