const express = require("express");

const coursesController = require("../controller/courses-controller");

const router = express.Router();

// GET /students/
router.get("/", coursesController.getCourses);

router.get("/:id", coursesController.getCourseById);

router.get("/registered/:id", coursesController.getEnrolledCourses);
router.get("/unregistered/:id", coursesController.getUnEnrolledCourses);

router.post("/", coursesController.saveCourse);

router.put('/:id', coursesController.modifyCourse)

router.put('/enroll/:courseId/:studentId', coursesController.enrollCourse)
router.put('/unEnroll/:courseId/:studentId', coursesController.unEnrollCourse)


router.delete("/:id", coursesController.deleteCourse);

module.exports = router;