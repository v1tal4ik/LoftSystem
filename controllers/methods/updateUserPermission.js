const db = require('../../models/db');


module.exports = async(req,res,next)=>{
  const data = JSON.parse(req.body);
  const permissionId = data.permissionId;
  //console.log(data.permission);
  db.updateUserPermission(permissionId,data.permission.chat)
    .then((result)=>{
      console.log(result);
    },err=>{
      console.log(err);
    })
}