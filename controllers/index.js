const getIndex = require('./methods/User/getIndex');
const saveNewUser = require('./methods/User/saveNewUser');
const login = require('./methods/User/login');
const getUsers  = require('./methods/User/getUsers');
const deleteUserById  = require('./methods/User/deleteUserById');
const updateUserById  = require('./methods/User/updateUserById');
const saveUserImageById  = require('./methods/User/saveUserImageById');
const updateUserPermission  = require('./methods/User/updateUserPermission');

const getNews  = require('./methods/News/getNews');
const newNews  = require('./methods/News/newNews');
const deleteNewsById  = require('./methods/News/deleteNewsById');
const updateNewsById  = require('./methods/News/updateNewsById');



module.exports.index = getIndex;
module.exports.saveNewUser = saveNewUser;
module.exports.login = login;
module.exports.getUsers  = getUsers;
module.exports.deleteUserById  = deleteUserById;
module.exports.updateUserById  = updateUserById;
module.exports.saveUserImageById  = saveUserImageById;
module.exports.updateUserPermission  = updateUserPermission;

module.exports.getNews  = getNews;
module.exports.newNews  = newNews;
module.exports.deleteNewsById  = deleteNewsById;
module.exports.updateNewsById  = updateNewsById;
