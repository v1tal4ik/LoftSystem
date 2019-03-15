const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js');

router.get('/',controllers.index);
router.post('/api/saveNewUser',controllers.saveNewUser);
router.post('/api/login',controllers.login);
router.get('/api/getUsers',controllers.getUsers);
router.delete('/api/deleteUser/:id',controllers.deleteUserById);
router.put('/api/updateUserPermission/:id',controllers.updateUserPermission);
router.put('/api/updateUser/:id',controllers.updateUserById);
router.post('/api/saveUserImage/:id',controllers.saveUserImageById);


module.exports = router;