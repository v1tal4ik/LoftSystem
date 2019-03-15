const db = require('../../models/db');


module.exports = async(req,res,next)=>{
    const data = JSON.parse(req.body);
    const user = await db.getById(data.userId);
    const {date,text,theme }= data;
    //user.id = user._id;    
    
    db.saveNewNews(user,date,text,theme)
        .then((result)=>{
            res.status(201).json(result);
        },(err)=>{
            res.status(400).json({ err: err.message });
        })
}