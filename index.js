// all requires and objects
var express = require('express');
var app = express();
var cors = require('cors')
var bodyParser = require("body-parser");
var router = require('./src/routes/appRoute');

// constant variables
const path = require('path')
const PORT = process.env.PORT || 5000;

// middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Application Routes
app.use('/', router);

app.listen(PORT, () => console.log(`Listening on ${PORT}`))