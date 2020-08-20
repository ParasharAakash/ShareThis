const express = require('express');
const router = express.Router();
const homecontroller = require('../Controllers/Home');
const homeController = require('../Controllers/Home');
const bodyParser = require('body-parser');
// const authenticate = require('../authenticate');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const imageFileFilter = (req, file, cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter});


//authentication of admin login 
router.post('/admin/login', homecontroller.admin_login);

router.post("/user/login", homeController.user_login);

router.post("/user/signup",upload.single('imageFile'), homeController.user_signup);

module.exports = router;