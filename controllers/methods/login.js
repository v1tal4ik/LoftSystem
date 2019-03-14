const db = require('../../models/db');
const crypto = require('crypto');

module.exports = async(req,res,next)=>{
    const data = JSON.parse(req.body);
    const {username,password,remembered} = data;
    db.getByName(username)
        .then(result=>{
        const hash = crypto.pbkdf2Sync(password,result.salt,100,256,'sha512').toString('hex');
          if (hash === result.password && username === result.username){
            res.status(201).json(result);
          }
        },
        err=>{
            res.status(400).json({ err: err.message });
        });

}