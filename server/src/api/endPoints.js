const express = require('express');
const router  = express.Router();
const {login} = require('../controllers/loginControllers');
const {users} = require('../controllers/usersControllers')
router.post('/login', login);
router.get('/usuarios',users);

module.exports = router;