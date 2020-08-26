const express = require('express');
const router = express.Router();
const homeController = require('../Controllers/Home');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file);
        cb(null, 'uploads');
        
    },

    filename: (req, file, cb) => {
        console.log(file);
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
router.post('/admin/login', homeController.admin_login);

router.post("/user/login", homeController.user_login);

router.post("/user/signup",upload.single('image'), homeController.user_signup);



module.exports = router;