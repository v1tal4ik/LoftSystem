const db = require('../../models/db');


module.exports = async(req,res,next)=>{
   db.deleteUserById(req.params.id)
      .then((result)=>{
         if(result._id == req.params.id){
            console.log('User was deleted');
            res.status(201).json("User was deleted");
         }
      },(err)=>{
         res.status(400).json({ err: err.message });
      })
}