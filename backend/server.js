const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 7002;

var cors = require('cors');
app.use(cors());

let bodyParser = require('body-parser');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

// API
let apiRoutes = require("./api/router");
app.use('/api', apiRoutes);




var uri = 'mongodb://sheh:qwertyuiop@cluster0-shard-00-00-m1yaq.mongodb.net:27017,cluster0-shard-00-01-m1yaq.mongodb.net:27017,cluster0-shard-00-02-m1yaq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
var db = mongoose.connect(uri, {useNewUrlParser: true}).catch((error) => { console.log(error, 'this is error'); });


app.listen(port, ()=>{console.log(`Starting development server at http://localhost:${port}/\nQuit the server with CONTROL-C.`)});