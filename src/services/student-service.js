const StudentModel = require("../models/student");
const SetClaim = require("../firebase/set-custom-claims");

const getStudents = async () => {
  const students = await StudentModel.find().lean().exec();
  return students;
};

const saveStudent = async (student) => {
  const savedStudent = new StudentModel(student);

  await savedStudent.save()

    .then(SetClaim.SetClaim(student.uid, "Student"));

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

const getSingleStudentByEmail = async (email) => {
  try {
    return await StudentModel.findOne({ correo: email });
  } catch (error) {
    console.error(`Failed to get student by email: ${error}`);
    return null; // Or throw an error, or return an error message, etc.
  }
}

module.exports = {
  getSingleStudentByEmail,
  getStudents,
  saveStudent,
  updateStudent,
  deleteStudent,
  getStudentById,
};