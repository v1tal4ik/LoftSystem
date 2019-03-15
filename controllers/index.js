const getIndex = require('./methods/getIndex');
const saveNewUser = require('./methods/saveNewUser');
const login = require('./methods/login');
const getUsers  = require('./methods/getUsers');
const deleteUserById  = require('./methods/deleteUserById');
const updateUserById  = require('./methods/updateUserById');
const saveUserImageById  = require('./methods/saveUserImageById');
const updateUserPermission  = require('./methods/updateUserPermission');



module.exports.index = getIndex;
module.exports.saveNewUser = saveNewUser;
module.exports.login = login;
module.exports.getUsers  = getUsers;
module.exports.deleteUserById  = deleteUserById;
module.exports.updateUserById  = updateUserById;
module.exports.saveUserImageById  = saveUserImageById;
module.exports.updateUserPermission  = updateUserPermission;