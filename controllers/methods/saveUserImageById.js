const db = require('../../models/db');
const configDir = require('../../config/upload.json');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');


module.exports = async(req,res,next)=>{
    const form = new formidable.IncomingForm();

    form.uploadDir = path.join(process.cwd(),configDir.uploadDir);

    form.parse(req,(err,fields,files)=>{
       let id ='';
       for(let i in files){
           id = i;
           id.toString();
       }
       let old_path = files[id].path;
       let new_path = path.join(process.cwd(),configDir.uploadDir,files[id].name);
       fs.renameSync(old_path,new_path);

       res.send({path:new_path});
    });
}