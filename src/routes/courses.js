const express = require("express");

const coursesController = require("../controller/courses-controller");

const router = express.Router();

// GET /students/
router.get("/", coursesController.getCourses);

router.get("/:id", coursesController.getCourseById);

router.post("/", coursesController.saveCourse);

router.delete("/:id", coursesController.deleteCourse);

module.exports = router;