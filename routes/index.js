const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js');

router.get('/',controllers.index);
router.post('/api/saveNewUser',controllers.saveNewUser);
router.post('/api/login',controllers.login);


module.exports = router;