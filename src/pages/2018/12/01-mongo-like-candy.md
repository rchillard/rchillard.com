---
title: "Mongo like Candy"
date: "2018-12-01"
category: "development"
tags: ['databases','mongodb']
---

[Mongo like candy](https://www.youtube.com/watch?v=P8ciVBQixpU), but MongoDB likes unstructured data.  I am diving into MongoDB.  Let's hope it doesn't blow up in my face like the infamous candygram.  As a refresher, MongoDB is a non-relation (NoSQL) database.  There are many types of these that were covered in a previous post, but this one is a document-based data store.

## Encoding
Document databases encode data in a standard format.  For MongoDB and my applications, I'll be using JSON to display data.  JSON is light weight, easy to read and easy to use in JavaScript, so it's perfect for me.  Here's an example:
```javascript
{
    _id: <ObjectId>,
    username: "rchillard",
    password: "luggagecombination12345"
}
```
As you can see, this is a single document, but it sure looks a lot like an object in JavaScript.  That's because JSON stands for JavaScript Object Notation and the syntax is virtually identical.  As a result, I'm going to use document and object interchangeably from here on out.

There's an important property above, which is the _id property.  The _id property is unique to every object in the database and is how document-based databases refer to individual documents.

## Associations
Once you understand and can implement a document, the topic of relating or associating individual documents to one another quickly comes up.  MongoDB supports a number of different assocations.  Associations are ways of linking different documents together.
- one  : one
- one  : many
- many : many

And you can implement these associations by either embedding an object inside of another one or by referencing the object's id.  Remember this is okay because MongoDB supports a fluid schema.  This is considered denormalized data.

### Embedded Objects
Embedding an object inside another object closely ties the two together, as the sub-object or embedded object will also be retrieved with any database operation that returns the parent object.  The sub-object is literally *inside* the first object.
> Parent document: Object 1
>> New document:   Object 2

Example JSON:
```javascript
{
    _id: <ObjectId>,
    username: "rchillard",
    password: "luggagecombination12345"
    email: {
         provider: "Google",
         address: "rchillard@gmail.com"   
    }
}
```
In the example above, email is actually an object with two properties that are contained *within* the parent account object.

### Referenced Objects
Referencing another object means you are storing the address of another object inside of the 1st.  This is a little closer to how relational databases work with keys and foreign keys, and this can support a normalized data model.
> Object 1
>> [ Reference to Object 2's ID ]

Example JSON:
```javascript
{
    _id: <ObjectId1>,
    username: "rchillard",
    password: "luggagecombination12345",
}

// The object below is referencing the 1st object above
{
    _id: <ObjectId2>,
    account_id: <ObjectId1>
    provider: "Google",
    address: "rchillard@gmail.com"
}
```
In the example above, there are two completely separate objects.  You might start to see how the shape of your data model can shift to accommodate different features.  For example, if your system is going to require that an account only having a single email address, then embedding the email within each account object may make more sense.  If your system is going to allow any given account to have multiple email addresses, then it may make more sense to reference those as separate objects. 

So, how does it work?  Just tell me the commands!  I want to start copy-pasting stuff into my console. 
:sunglasses:

# MongoDB Commands

| Command     | Purpose |
| ----------- | ----------- |
| mongod      | Runs the Mongo daemon |
| mongo       | Opens up database shell |
| show dbs    | Display the databases on the server |
| use 'db'    | Create or use a database (switch to it) |
| insert      | CREATE command to store new data |
| find        | READ command to retrieve data |
| update      | UPDATE command to modify existing data |
| delete      | DELETE command to remove data |
| show collections | display the collections in a database |

Collections are a new concept.  Databases hold collections of documents in this world.  They're kind of like a folder.  A collection is similar to a table in a relational database.  All documents must exist in collection and all collections must exist within a database (the parent thing in this hierarchy).  Any given MongoDB can have multiple actual databases inside of it, which can in turn contain multiple collections per database.  Here's the hierarchy:
> MongoDB instance
>> database
>>> collection
>>>> object

## CRUD
Create, Read, Update, Delete (CRUD) covers all the primary operations of a data store.  You'll find some examples below of each in MongoDB.

### Create
```javascript
// db.collections.insert({ data })
db.accounts.insertOne(
    {
        username: "rchillard",
        password: "luggagecombination12345"
    }
)
```
In the example above, the accounts collection is being used with the insertOne command.  There's also an insertMany.

### Read
```javascript
// db.collection.find({ matching criteria })
db.accounts.find({ username: "rchillard" })
```
You're probably starting to see a pattern.  When issuing any command, you must reference the collection you want that command to operate on.  The basic READ example above uses matching criteria to retrieve the desired record (the document we just created in the CREATE example).

### Update
```javascript
// db.collection.update({ matching criteria }, $set: { data to update })
db.accounts.updateOne({ username: "rchillard" }, $set: { password: "54321wifipassword" })
```
Just as with the CREATE operation, updateOne and UpdateMany exist to address the two primary update cases, as well as a replaceOne command to wholesale replace the current object with a new one.  $set is used to signify what data is being updated.

### Delete
```javascript
// db.collection.deleteOne({ matching criteria})
db.accounts.deleteOne({ username: "rchillard" })
```
You've probably guessed that there's a deleteOne and deleteMany by now.  The ability to execute all of these commands with the same simple syntax, passing matching criteria in JSON format, means that it's easy to remember how you interact with MongoDB.

## Conclusion
This is a lot.  It took me about a week to wrap my head around some of these big concepts.  I still need more practice.  Do you feel like this?

![Mongo the Cowboy](mongo-the-cowboy.jpg "Large Cowboy with Hat")
The cowboy Mongo from [Blazing Saddles (1974)](https://www.imdb.com/title/tt0071230/)

Yea, me too.  

This lengthy post (maybe my longest ever so far?) covers MongoDB essentials, but how do you really interact with MongoDB?  It doesn't really come together until you see this in action.  We're going to use MongoDB on a NodeJS project.  I'm going to cover a Node package called [Mongoose](https://www.npmjs.com/package/mongoose) next.