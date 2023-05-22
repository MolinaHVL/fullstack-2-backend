const TeacherModel = require("../models/teacher");
const SetClaim = require("../firebase/set-custom-claims");

const getTeachers = async () => {
  const Teachers = await TeacherModel.find().lean().exec();
  return Teachers;
};

const saveTeacher = async (Teacher) => {
  const savedTeacher = new TeacherModel(Teacher);

  await savedTeacher.save()

    .then(SetClaim.SetClaim(Teacher.uid, "Teacher"));

  return savedTeacher;
};

const updateTeacher = async (id, newTeacherInfo) => {
  const updatedTeacher = await TeacherModel.findByIdAndUpdate(id, newTeacherInfo, {
    returnDocument: "after",
  })
    .lean()
    .exec();


  return updatedTeacher;
};

const deleteTeacher = async (id) => {
  return await TeacherModel.findByIdAndDelete(id).exec();
};

const getTeacherById = async (id) => {
  const Teacher = await TeacherModel.findById(id).lean().exec();

  return Teacher;
};

module.exports = {
  getTeachers,
  saveTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacherById,
};