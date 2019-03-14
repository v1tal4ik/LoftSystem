const db = require('../../models/db');


module.exports = async(req,res,next)=>{
    db.gets()
        .then(result=>{
        result.map((item)=>{
            item.id = item._id;
            return item;
        });
        res.status(201).json(result);
        },
        err=>{
            res.status(400).json({ err: err.message });
        });

}