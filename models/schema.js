const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Укажите имя пользователя'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Укажите пароль'],
    },
    firstName: {
      type: String,
      required: [true, 'Укажите Ваше имя'],
    },
    surName: {
      type: String,
      required: [true, 'Укажите Ваше имя'],
    },
    middleName: {
      type: String,
      required: [true, 'Укажите отчество'],
    },
    img: {
      type: String
    },
    access_token:{
      type:String
    },
    id:{
      type:String
    },
    permissionId:{
      type:String
    },
    salt:{
      type:String
    },
    permission:{
      chat:{
          C:Boolean,
          R:Boolean,
          U:Boolean,
          D:Boolean
      },
      news:{
          C:Boolean,
          R:Boolean,
          U:Boolean,
          D:Boolean
      },
      setting:{
          C:Boolean,
          R:Boolean,
          U:Boolean,
          D:Boolean
      }
  }

  },
  { versionKey: false }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
