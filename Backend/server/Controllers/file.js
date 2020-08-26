const File = require("../Models/File");
const User = require("../Models/User");

// Upload Files
exports.uploadFile = async (req, res, next) => {
  try {
    const files = req.files;
    // console.log(files);

    if (files.length === 0) {
      const error = new Error("Please select a File");
      error.httpStatusCode = 400;
      return next(error);
    }

    for (i = 0; i < files.length; i++) {
      const createdFile = await File.create({
        filename: req.files[i].originalname,
        uploadedby: req.userData.id,
      });

      const user = await User.findById(req.userData.id);
      user.files.push(createdFile._id);
      // console.log(user.files);
      await User.findByIdAndUpdate(req.userData.id, {
        files: user.files,
      });
    }
    res.status(201).json({
      msg: "file uploaded Successfully",
    });
  } catch (err) {
    return next(
      new ErrorResponse(`Error in file uploading: ${err.message}`, 400)
    );
  }
};

// fetch uploaded files
exports.fetchUploadedFile = async (req, res, next) => {
  try {
    const files = await File.find({ uploadedby: req.userData.id });
    res.status(200).json(files);
  } catch (err) {
    return next(
      new ErrorResponse(`Error in fetching files: ${err.message}`, 400)
    );
  }
};
