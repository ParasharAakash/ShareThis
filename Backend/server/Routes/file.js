const express = require("express");
const router = express.Router();
const multer = require("multer");
const fileController = require("../Controllers/file");
const Auth = require("../Lib/check-auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.startsWith("image") ||
    file.mimetype.startsWith("video") ||
    file.mimetype == "application/pdf"
  ) {
    cb(null, true);
  } else {
    console.log("Upload Images, Videos & Pdf only");
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 3000000,
  },
  fileFilter,
});

router.post(
  "/fileupload",
  upload.array("files"),
  Auth.checkAuth,
  fileController.uploadFile
);
router.get(
  "/getuploadedfile",
  Auth.checkAuth,
  fileController.fetchUploadedFile
);

module.exports = router;
