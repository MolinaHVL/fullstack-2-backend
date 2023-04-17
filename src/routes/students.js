const express = require("express");

const studentsController = require("../controller/students-controller");

const router = express.Router();

// GET /students/
router.get("/", studentsController.getStudents);

router.post("/", studentsController.saveStudent);

router.put("/:id", studentsController.updateStudent);

router.delete("/:id", studentsController.deleteStudent);

module.exports = router;
