const db = require('../../models/db');


module.exports = async(req,res,next)=>{
  const data = JSON.parse(req.body);
  const {id,theme,text}= data;
  if(text){
      db.updateTextNewsById(id,text)
        .then((result)=>{
            console.log('Text was update');
        },(err)=>{
            res.status(400).json({ err: err.message });
        });
  }


  if(theme){
    db.updateThemeNewsById(id,theme)
      .then((result)=>{
        console.log('Theme was update');
      },(err)=>{
          res.status(400).json({ err: err.message });
      })
    }

    db.getsNews()
        .then(result=>{
            res.status(201).json(result);
        },
        err=>{
            res.status(400).json({ err: err.message });
        });
}