const Student = require("../models/student");
const SetClaim = require("../firebase/set-custom-claims");

const getStudents = async () => {
  const students = await Student.find().lean().exec();
  return students;
};

const saveStudent = async (student, UserUID) => {
  const savedStudent = new StudentModel(student);
  console.log(UserUID)
  await savedStudent.save()
    .then(SetClaim.SetClaim(UserUID, "Student"));

  return savedStudent;
};

const updateStudent = async (id, newStudentInfo) => {
  const updatedStudent = await StudentModel.findByIdAndUpdate(id, newStudentInfo, {
    returnDocument: "after",
  })
    .lean()
    .exec();

  return updatedStudent;
};

const deleteStudent = async (id) => {
  return await StudentModel.findByIdAndDelete(id).exec();
};

const getStudentById = async (id) => {
  const student = await StudentModel.findById(id).lean().exec();

  return student;
};

module.exports = {
  getStudents,
  saveStudent,
  updateStudent,
  deleteStudent,
  getStudentById,
};