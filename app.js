const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const port = 8000;

app.listen(port, (req,res) => {
    console.log(`server started on port ${port}`);
});


const sequelize = new Sequelize('prasad', '1608', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
.then( ()=> {
    console.log("Database Connected");
}).catch( err => {
    console.error('unable to connect to Database');
});
