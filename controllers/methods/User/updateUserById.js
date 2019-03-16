const db = require('../../../models/User/db_User');
const crypto = require('crypto');



module.exports = async(req,res,next)=>{
  const data = JSON.parse(req.body);
  const {oldPassword,password,id,image} = data;
  
  if (oldPassword && password){
    const response = await updatePassword(id,oldPassword,password);
      if(response!== true){
        res.status(400).json({ response: response.message });
      }
      console.log('password update');
  }
  if(image){
    const response = await updateImage(id,image);
    if(response!== true){
      res.status(400).json({ response: response.message });
    }
    console.log('image update');
  }

  try{
    const result = await getUpdateUser(id);
      result.id = result._id;
      res.status(201).json(result);
  }catch(err){
    res.status(400).json({ err: err.message });
  }
  
}

async function getUpdateUser(id){
  return db.getById(id)
    .then((result)=>{
      return result;
    },err=>{
       throw new Error(err);
    })
}

async function updatePassword(id,oldPassword,password){
  return db.getById(id)
      .then((result)=>{
          const hash = crypto.pbkdf2Sync(oldPassword,result.salt,100,256,'sha512').toString('hex');
            if (hash === result.password){
              const update_hash = crypto.pbkdf2Sync(password,result.salt,100,256,'sha512').toString('hex');
              return db.updateUserInfo(id,update_hash)
                  .then((result)=>{
                      return true;
                  },(err)=>{
                      return err;
                  })
            }else{
             return new Error('Old password is wrong!');
            }
      },(err)=>{
          return err;
      });
}

async function updateImage(id,img){
  return db.updateUserImg(id,img)
    .then((result)=>{
      return true;
    },err=>{
      return err;
    })
}