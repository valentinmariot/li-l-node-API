const express = require('express');
const router = express.Router();
const ObjectID =  require('mongoose').Types.ObjectId;

const { AuthorsModel } = require('../models/authorsModel');

// to fetch
router.get('/', (req, res) => {
    AuthorsModel.find((err, docs) => {
        !err ? res.send(docs) : console.log('Error to get data: ', err);
    });
});

// to add
router.post('/', (req, res) => {
    const newAuthor = new AuthorsModel({
        author: req.body.author,
        date_of_birth: req.body.date_of_birth
    });

    newAuthor.save((err, docs) => {
        !err ? res.send(docs) : console.log('NewAuthor error: ', err);
    });
});

// to update
router.put('/:id', (req, res) => {
    !ObjectID.isValid(req.params.id) && res.status(400).send("Unknow ID: ", req.params.id);
    
    const updateAuthor = {
        author: req.body.author,
        date_of_birth: req.body.date_of_birth
    };

    AuthorsModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateAuthor },
        { new: true },
        (err, docs) => {
            !err ? res.send(docs) : console.log('Update error: ', err);
        },
    );
});

// to delete
router.delete('/:id', (req, res) => {
    !ObjectID.isValid(req.params.id) && res.status(400).send("Unknow ID: ", req.params.id);

    AuthorsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            !err ? res.send(docs) : console.log('Delet error: ', err);
        },
    );
});

module.exports = router; 