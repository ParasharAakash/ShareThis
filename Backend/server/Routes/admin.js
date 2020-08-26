const express = require('express');
const router = express.Router();
const Admincontroller = require('../Controllers/Admin');
const Auth = require("../Lib/check-auth");


router.get('/online',Admincontroller.active_users);
router.get('/allusers', Auth.checkAuth, Admincontroller.all_users);
router.get('/totalusers',Auth.checkAuth,Admincontroller.total_users);
router.put('/block/:id', Admincontroller.block);
router.put('/online/:id', Admincontroller.online);

module.exports = router;