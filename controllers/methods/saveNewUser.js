const db = require('../../models/db');

module.exports = async(req,res,next)=>{
    db.saveNewUser(req.body)
        .then((result)=>{
            result.id = result._id;
            res.status(201).json(result);
        },(err)=>{
            res.status(400).json({ err: err.message });
        });
}