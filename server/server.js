const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const app = express();

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

app.listen(3003, () => console.log('Server is running on port 3003'))