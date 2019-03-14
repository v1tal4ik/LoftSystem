const getIndex = require('./methods/getIndex');
const saveNewUser = require('./methods/saveNewUser');
const login = require('./methods/login');



module.exports.index = getIndex;
module.exports.saveNewUser = saveNewUser;
module.exports.login = login;