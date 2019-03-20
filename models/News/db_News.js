const mongoose = require('mongoose');
const News = require('./schemaNews');



module.exports.getsNews = function () {
    return News.find();
};

module.exports.saveNewNews = function (user, date, text, theme) {
    const id = Math.floor(1000000 + Math.random() * 900000);
    const newNews = new News({
        date: date,
        text: text,
        theme: theme,
        user: user,
        id: id
    });
    return newNews.save();
};

module.exports.deleteNewsById = function (id) {
    return News.findOneAndDelete({id: id});
}

module.exports.updateTextNewsById = function (id, text) {
    return News.findOneAndUpdate({id: id}, {text: text}, {new: true});
}

module.exports.updateThemeNewsById = function (id, theme) {
    return News.findOneAndUpdate({id: id}, {theme: theme}, {new: true});
}