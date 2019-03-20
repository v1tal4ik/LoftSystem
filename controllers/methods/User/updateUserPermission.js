const db = require('../../../models/User/db_User');


module.exports = async (req, res, next) => {
    const data = JSON.parse(req.body);
    const permissionId = data.permissionId;
    for (let type in data.permission) {
        for (let operation in data.permission[type]) {
            let value = data.permission[type][operation];
            db.updateUserPermission(permissionId, type, operation, value)
                .then((result) => {
                    result.id = result._id;
                    res.status(201).json(result);
                }, (err) => {
                    res.status(400).json({
                        err: err.message
                    });
                })
        }
    }
}