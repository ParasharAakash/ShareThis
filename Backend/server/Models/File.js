const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: [true, "Please Select a File"],
  },
  uploadedby: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  sharedto: {
    type: [],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("File", FileSchema);
