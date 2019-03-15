const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const crypto = require('crypto');
const Users = require('./schemaUser');
const News = require('./schemaNews');


/*********USER *****************/
module.exports.gets = function() {
    return Users.find();
  };
module.exports.getByName = function(name){
    return Users.findOne({username:name});
}

module.exports.getById = function(id){
    return Users.findById(id);
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

module.exports.deleteUserById = function(id){
    return Users.findOneAndDelete({_id:id});
}

module.exports.updateUserPermission = function(id,data){
    console.log(data);
    return Users.findOneAndUpdate({permissionId:id},{chat:data},{new:true});
} 

module.exports.updateUserInfo = function(id,data){
    return Users.findByIdAndUpdate(id,{password:data},{new:true});
}

module.exports.updateUserImg = function(id,image){
    return Users.findByIdAndUpdate(id,{image:image},{new:true});
}
  



/*******************NEWS *******************/
module.exports.getsNews = function() {
    return News.find();
  };

module.exports.saveNewNews = function(user,date,text,theme) {
    const id =  Math.floor(1000000 + Math.random() * 900000);
    const newNews = new News({
        date:date,
        text:text,
        theme:theme,
        user:user,
        id:id
    });
    return newNews.save();
  };  

module.exports.deleteNewsById = function(id){
    return News.findOneAndDelete({id:id});
}

module.exports.updateTextNewsById = function(id,text){
    return News.findOneAndUpdate({id:id},{text:text},{new:true});
}

module.exports.updateThemeNewsById = function(id,theme){
    return News.findOneAndUpdate({id:id},{theme:theme},{new:true});
}