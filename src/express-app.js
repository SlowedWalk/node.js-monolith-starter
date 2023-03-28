const express = require('express');
const cors  = require('cors');
// const { customer, products, shopping } = require('./api');
const HandleErrors = require('./utils/error-handler')


module.exports = async (app) => {

    app.use(express.json({ limit: '2mb'}));
    app.use(express.urlencoded({ extended: true, limit: '2mb'}));
    app.use(cors());
    app.use(express.static(__dirname + '/public'))
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });
    //api
    // customer(app);
    // products(app);
    // shopping(app);

    // error handling
    app.use(HandleErrors);
    
}