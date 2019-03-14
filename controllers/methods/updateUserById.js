const db = require('../../models/db');
const crypto = require('crypto');

module.exports = async(req,res,next)=>{
    const data = JSON.parse(req.body);
    const {oldPassword,password,id} = data;
  db.getById(id)
    .then((result)=>{
        const hash = crypto.pbkdf2Sync(oldPassword,result.salt,100,256,'sha512').toString('hex');
          if (hash === result.password){
            const update_hash = crypto.pbkdf2Sync(password,result.salt,100,256,'sha512').toString('hex');
            db.updateUserInfo(id,update_hash)
                .then((result)=>{
                    result.id = result._id;
                    res.status(201).json(result);
                },(err)=>{
                    res.status(400).json({ err: err.message });
                })
          }else{
            res.status(400).json({ err: ('Old password is wrong!') });
          }
    },(err)=>{
        res.status(400).json({ err: err.message });
    });
}