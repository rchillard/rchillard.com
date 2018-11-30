---
title: "Mongo like Candy"
date: "2018-12-01"
tags: ['learn','databases','non-relational', 'mongodb']
---

[Mongo like candy](https://www.youtube.com/watch?v=P8ciVBQixpU), but MongoDB also seems to like unstructured data.  I am diving into MongoDB.  Let's hope it doesn't blow up in my face like the infamous candygram.  As a refresher, MongoDB is a non-relation (NoSQL) database.  In the grand scheme of things, there are a few types of these, but this one is a document-based data store.

MongoDB supports a number of different assocations:
- one:one
- one:many
- many:many

And you can implement these associations by either embeding them or referencing them.

## Embeded
> Object 1
>> Object 2

## References
> Object 1
  [ Reference ID to Object 2 ]