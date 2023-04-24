const StudentService = require("../services/student-service");

const getStudents = async (req, res) => {
  const students = await StudentService.getStudents();

  res.json(students);
};

const saveStudent = async (req, res) => {
  const Student = req.body;
  // const UserUID = req.headers["User-UID"];

  const savedStudent = await StudentService.saveStudent(Student);

  res.status(201).json(savedStudent);
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const newStudentInfo = req.body;

  const updatedStudent = await StudentService.updateStudent(id, newStudentInfo);

  res.json(updatedStudent);
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;

  await StudentService.deleteStudent(id);

  res.status(204).send();
};

module.exports = {
  getStudents,
  saveStudent,
  updateStudent,
  deleteStudent,
};
