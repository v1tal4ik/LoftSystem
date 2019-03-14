const db = require('../../models/db');


module.exports = async(req,res,next)=>{
   db.deleteUserById(req.params.id)
      .then((result)=>{
         console.log(result._id);
         console.log(req.params.id);
         if(result._id == req.params.id){
            console.log('Пользователь бил удален');
            res.status(201).json("Пользователь бил удален");
         }
      },(err)=>{
         res.status(400).json({ err: err.message });
      })
}