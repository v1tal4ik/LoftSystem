const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    date: {
        type: Date,
    },
    id: {
        type: Number,
    },
    text: {
        type: String,
    },
    theme: {
        type: String,
    },
    user: {
        username: {
            type: String,
        },
        password: {
            type: String,
        },
        firstName: {
            type: String,
        },
        surName: {
            type: String,
        },
        middleName: {
            type: String,

        },
        img: {
            type: String
        },
        access_token: {
            type: String
        },
        id: {
            type: String
        },
    }, //user
}, {
    versionKey: false
});

const News = mongoose.model('News', newsSchema);

module.exports = News;