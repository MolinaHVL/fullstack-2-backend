const TeacherService = require("../services/teacher-service");

const getTeachers = async (req, res) => {
  const Teachers = await TeacherService.getTeachers();
  console.log('obteniendo maestros...')
  res.json(Teachers);
};

const getSingleTeacher = async (req, res) => {
  const { email } = req.params;

  const Teacher = await TeacherService.getSingleTeacherByEmail(email);

  res.json(Teacher);
};

const saveTeacher = async (req, res) => {
  const Teacher = req.body;

  const savedTeacher = await TeacherService.saveTeacher(Teacher);

  res.status(201).json(savedTeacher);
};

const updateTeacher = async (req, res) => {
  const { id } = req.params;
  const newTeacherInfo = req.body;

  const updatedTeacher = await TeacherService.updateTeacher(id, newTeacherInfo);

  res.json(updatedTeacher);
};

const deleteTeacher = async (req, res) => {
  const { id } = req.params;

  await TeacherService.deleteTeacher(id);

  res.status(204).send();
};

module.exports = {
  getTeachers,
  getSingleTeacher,
  saveTeacher,
  updateTeacher,
  deleteTeacher,
};
