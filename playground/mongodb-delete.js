// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoAPI', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MognoDB server');

    // deleteMany
    // db.collection('Users').deleteMany({ name: 'Andrew' })
    // .then((res) => console.log(res));


    // deleteOne
    db.collection('Users').deleteOne({ _id: new ObjectID("5c27a0eb1bde18778db88287") })
    .then((res) => console.log(res));


    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: true })
    // .then((res) => console.log(res));
    

    db.close();
})