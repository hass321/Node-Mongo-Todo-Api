// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoAPI', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MognoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c2798321bde18778db8815f')
    // }).toArray()
    // .then((docs) => console.log(JSON.stringify(docs, undefined, 2)))
    // .catch((err) => console.log('Unable to find todos', err));

    // db.collection('Users').find().count()
    // .then((count) => console.log(`Users count: ${count}`))
    // .catch((err) => console.log('Unable to find Users', err));

    db.collection('Users').find({ name: 'Andrew'}).count()
    .then((count) => console.log(`Users count: ${count}`))
    .catch((err) => console.log(`Unable to find users ${err}`));

    // Filter Search

    db.close();
})