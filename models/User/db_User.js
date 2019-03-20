const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const crypto = require('crypto');
const Users = require('./schemaUser');

module.exports.gets = function() {
    return Users.find();
  };
module.exports.getByName = function(name){
    return Users.findOne({username:name});
}

module.exports.getById = function(id){
    return Users.findById(id);
} 

module.exports.getByToken = function(token){
    return Users.findOne({access_token:token});
}

module.exports.saveNewUser = function(obj) {
    const data = JSON.parse(obj);
    const token = uuidv4();
    const permisId = Math.floor(1000000 + Math.random() * 900000);

    let salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(data.password,salt,100,256,'sha512').toString('hex');

    const newUser = new Users({
        username:data.username,
        password:hash,
        firstName:data.firstName,
        surName:data.surName,
        middleName:data.middleName,
        image:data.img,
        path:'',
        access_token:token,
        salt:salt,
        id:'',
        permissionId:permisId,
        permission:{
            chat:{
                C:data.permission.chat.C,
                R:data.permission.chat.R,
                U:data.permission.chat.U,
                D:data.permission.chat.D
            },
            news:{
                C:data.permission.news.C,
                R:data.permission.news.R,
                U:data.permission.news.U,
                D:data.permission.news.D
            },
            setting:{
                C:data.permission.setting.C,
                R:data.permission.setting.R,
                U:data.permission.setting.U,
                D:data.permission.setting.D
            }
        }
    });
    return newUser.save();
  };

module.exports.deleteUserById = function(id){
    return Users.findOneAndDelete({_id:id});
}

module.exports.updateUserPermission = function(permissionId,type,operation,value){
     return Users.findOne({permissionId:permissionId},function(err,doc){
        if(err){return err};
         doc.permission[type][operation]= value;
            return doc.save();
    })
} 

module.exports.updateUserInfo = function(id,data){
    return Users.findByIdAndUpdate(id,{password:data},{new:true});
}

module.exports.updateUserImg = function(id,image){
    return Users.findByIdAndUpdate(id,{image:image},{new:true});
}
  