const db = require('../../models/db');


module.exports = async(req,res,next)=>{
    db.getsNews()
        .then(result=>{
            res.status(201).json(result);
        },
        err=>{
            res.status(400).json({ err: err.message });
        });
}