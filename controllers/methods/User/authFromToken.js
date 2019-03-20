const db = require('../../../models/User/db_User');


module.exports = async (req, res, next) => {
    db.getByToken(req.body)
        .then(result => {
                result.map((item) => {
                    item.id = item._id;
                    return item;
                });
                res.status(201).json(result);
            },(err) => {
                res.status(400).json({
                    err: err.message
                });
            });

}