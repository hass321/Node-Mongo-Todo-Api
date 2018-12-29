// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoAPI', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MognoDB server');

    db.collection('Todos').insertOne({
        text: 'Learn complete Mongo and Nodejs',
        completed: true
    }, (er, result) => {
        if(err){
            return console.log('Unable to create todo', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // db.collection('Users').insertOne({
    //     name: 'Hassan Tasleem',
    //     age: 26,
    //     location: 'Pakistan, Sindh, Karachi'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to create user', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 1));
    // });

    db.close();
})