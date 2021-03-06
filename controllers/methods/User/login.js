const db = require('../../../models/User/db_User');
const crypto = require('crypto');

module.exports = async (req, res, next) => {
    const data = JSON.parse(req.body);
    const {username,password,remembered} = data;
    db.getByName(username)
        .then(result => {
                const hash = crypto.pbkdf2Sync(password, result.salt, 100, 256, 'sha512').toString('hex');
                if (hash === result.password && username === result.username) {
                    result.id = result._id;
                    res.status(201).json(result);
                }
            },(err) => {
                res.status(400).json({
                    err: err.message
                });
            });

}