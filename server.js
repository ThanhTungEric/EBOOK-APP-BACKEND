const express = require('express');
var app = express();

const routerAuthor = require('./router/AuthorRouter');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/author', routerAuthor);

// Path: server.js
app.listen(8081, () => {
    console.log('Express server started at port : 8080');
});