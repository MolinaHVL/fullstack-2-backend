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

const getSingleTeacherByEmail = async (email) => {
  try {
    return await TeacherModel.findOne({ correo: email });
  } catch (error) {
    console.error(`Failed to get teacher by email: ${error}`);
    return null; // Or throw an error, or return an error message, etc.
  }
}

module.exports = {
  getTeachers,
  getSingleTeacherByEmail,
  saveTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacherById,
};