const mongoose = require("mongoose");

const AuthorsModel = mongoose.model(
    "lil-node-api",
    {
        author: {
            type: String,
            required: true,
        },
        date_of_birth: {
            type: Date,
            required: true,
        },
        publish_date: {
            type: Date,
            default: Date.now
        },
    },
    "authors"
);

module.exports = { AuthorsModel };