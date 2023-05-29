const express = require("express");

const teachersController = require("../controller/teachers-controller");

const router = express.Router();

// GET /students/
router.get("/", teachersController.getTeachers);

router.get("/:email", teachersController.getSingleTeacher);

router.post("/", teachersController.saveTeacher);

router.put("/:id", teachersController.updateTeacher);

router.delete("/:id", teachersController.deleteTeacher);

module.exports = router;
