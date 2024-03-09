const express = require('express');
const bodyParser = require('body-parser');
const authorModel = require('../model/Author');
const authorRouter = express.Router();

authorRouter.use(bodyParser.urlencoded({ extended: true }));
authorRouter.use(bodyParser.json());

authorRouter.get('/', (req, res, next) => {
    authorModel.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});
authorRouter.post('/login', (req, res, next) => {
    const { email, password } = req.body;
    authorModel.findOne({ email: email, password: password })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});
authorRouter.post('/', (req, res, next) => {
    const author = new authorModel({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        description: req.body.description,
        address: req.body.address,
        phone: req.body.phone,
        avatar: req.body.avatar,
        status: req.body.status,
        password: req.body.password
    });
    author.save()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

module.exports = authorRouter;