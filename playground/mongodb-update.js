// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoAPI', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MognoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5c27c5da1bde18778db883b0")
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnNewDocument: true
    // }).then((result) => console.log(result))

    db.collection('Users').findOneAndUpdate({
        name: 'Hassan'
    },{
        $set: {
            location: 'SomeWhere On Earth'
        },
        $inc: {
            age: -2
        }
    },{
        returnNewDocument: true
    }).then((res) => console.log(res));

    db.close();
})