const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  }


});

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
