const express = require('express');
const router = express.Router();
const Admincontroller = require('../Controllers/Admin');
const bodyParser = require('body-parser');

router.get('/online',Admincontroller.online);
router.get('/allusers',Admincontroller.all_users);