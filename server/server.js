const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo(req.body);

    todo.save()
    .then((doc) => res.send(doc))
    .catch((err) => res.status(400).send(err));
})

app.listen(3003, () => console.log('Server is running on port 3003'))