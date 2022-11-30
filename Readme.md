DATABASE IS A COLLECTION OF DATA IN A STRUCTURED WAY
SQL:STRUCTURED QUERY LANGUAGE
How to use MongoDB
Raw queries of mongoose
mongoose is not an ORM (OBJECT RELATIONAL MA) it is an ODM (OBJECT DATA MAPPING)

Relational database consist of table column and roll (table: Entity (person, user, todo table), the column is fielld inside the table while the roww consist of the actual data inside the column/table)

Nosql database provides a mechanism for storing and retrieval of data
it doesnt work in a tabular format
they are key value pair

Types of Nosql
couchDB

## MongoDB
Mongodb consist of use admindatabase, collection and documenrt
mongoDB uses a json-like document with Schema
mongoDB consiste of key value pair 
 e.g {
    field1:value1;
    field2:value
 }
 install mongodb with brew
 - brew tap mongodb/brew
 - brew update
 - brew install mongodb-community@6.0

 To know your mongoDb is working
 - brew service start 

 brew install mongosh

 to start writting query, mongosh

 Data types in mongodb
 array
 json
 object
 integers
 boolean
 date

 to show all the database in mogodb
 use show databases cmd

 to use any of the listed database, you have to reference the specific database by typing (use "the database name")

 to create a collection inside the database you switch to, type db.createCollection("name of the collection")

 to exit the database use db.dropDatabase();

 to create a new database: db.createCollection("insert the name of the database")

 tp create a document: db.food.insert({price:"5000", foodType:"vegetable"})

 to delete a document in the database: 

 to drop  collection : db.food.drop (this will drop food collection inside the current database)

 to drop a collection use: db.food.drop();

to create a database: use myNewDB

db.myNewCollection1.insertOne( { x: 1 } )

 create  PRODUCT TABLE, INSERT MANY COLLECTION
db.shop.insertMany({[name:"tobi"]})



use Products (this create new database for products)
After creating the database, create a collection by typing db.createCollection("shop"); this create a shop collection
after that insert the procuts by using insertMany to insert lot of product db.shop.insertMany([{"name":"Michael", "price":2000},{"name":"Kosi","price":3000},{"name":"Ade", "price":8000},{"name":"Kunle","price":4000}]);

to find the product with the least price db.shop.find({"price":{$lte:2000}});
to find the product greater than 1000 Products> db.shop.find({"price":{$gt:1000}}); 
to find product by Id, use findOne  db.shop.findOne({"_id":ObjectId("6387103e653d76e585856496")});
to find product by name db.shop.findOne({"name":"Kunle"});
to find product by price db.shop.findOne({"price":2000});
to delete product db.shop.deleteOne({"price":2000}) or db.shop.findOneAndDelete({"price":2000})



Learn about Sql and No SQL database

Why is indexing important to relational and non-relational database

difference betwween BSON and JSON

BSON
it's an encoding format of json
it was designed to take less space unlike the json

JSON


AGGREGATIONS IN DATABASE
a criteria qiven to your query in form of json format used for limiting and sorting

db.shop.find({}).limit(1): this find all the products in the document but return a singular data (i.e the first data)because the result was limited to one
db.shop.find({}).skip(1): this process the whole products in the document but skip the first product and return the remaining ones

db.shop.find().sort({"price":1}); this sort the data in the database in an ascending order

db.shop.find().sort({"price":1}).skip(1); this sort all in an ascending order and skip the first product while returning the remaining products in the document.

db.shop.find().sort({"price":-1}); this 

## Pipeline is a Sequence of data aggregation or stages
var pipeline = [
   {$sort:{"price":-1}},{$limit:1}
]

yarn add migrate-mongo
yarn add -D @types/migrate-mongo
yarn migrate-mongo init