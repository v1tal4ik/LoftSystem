const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const crypto = require('crypto');
const Users = require('./schema');



module.exports.gets = function() {
    return Users.find();
  };

module.exports.saveNewUser = function(obj) {
    const data = JSON.parse(obj);
    const token = uuidv4();

    let salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(data.password,salt,100,256,'sha512').toString('hex');

    const newUser = new Users({
        username:data.username,
        password:hash,
        firstName:data.firstName,
        surName:data.surName,
        middleName:data.middleName,
        img:data.img,
        access_token:token,
        salt:salt,
        id:'',
        permission:{
            chat:{
                C:true,
                R:true,
                U:true,
                D:true
            },
            news:{
                C:true,
                R:true,
                U:true,
                D:true
            },
            setting:{
                C:true,
                R:true,
                U:true,
                D:true
            }
        }
    });
    return newUser.save();
  };
  
module.exports.getByName = function(name){
    return Users.findOne({username:name});
}  