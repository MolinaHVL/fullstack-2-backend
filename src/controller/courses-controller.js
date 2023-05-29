const CourseServices = require('../services/course-service')

const getCourses = async (req, res) => {

    const courses = await CourseServices.getCourses();

    console.log('obteniendo cursos...')

    res.status(200).json(courses);
};

const getCourseById = async (req, res) => {

    const { id } = req.params;

    const course = await CourseServices.getCourseById(id);

    res.status(200).json(course);
};

const getUnEnrolledCourses = async (req, res) => {

    const { id } = req.params;

    const courses = await CourseServices.getUnEnrolledCourses(id);

    res.status(200).json(courses)
};

const getEnrolledCourses = async (req, res) => {

    const { id } = req.params;

    const courses = await CourseServices.getEnrolledCourses(id);

    res.status(200).json(courses)
};

const saveCourse = async (req, res) => {

    console.log('guardando curso...')

    const { titulo, materia, descripcion, idMaestro, videos } = req.body;

    console.log(videos)

    const savedCourse = await CourseServices.saveCourse(titulo, materia, descripcion, idMaestro, videos);

    res.status(201).json(savedCourse);
};

const modifyCourse = async (req, res) => {
    const { id } = req.params;
    const newComment = req.body;

    console.log(newComment)

    await CourseServices.modifyCourse(id, newComment);

    res.status(200).json("Curso Modificado");

};

const enrollCourse = async (req, res) => {
    const { courseId, studentId } = req.params;

    console.log(courseId, studentId)
    const enroll = await CourseServices.enrollCourse(courseId, studentId)

    res.status(200).json(enroll)
};

const unEnrollCourse = async (req, res) => {
    const { courseId, studentId } = req.params;

    const unEnroll = await CourseServices.unEnrollCourse(courseId, studentId)

    res.status(200).json(unEnroll)
};

const deleteCourse = async (req, res) => {
    const { id } = req.params;

    await CourseServices.deleteCourse(id);

    res.status(204).send();
};

module.exports = {
    getCourses,
    getUnEnrolledCourses,
    getEnrolledCourses,
    modifyCourse,
    enrollCourse,
    unEnrollCourse,
    getCourseById,
    saveCourse,
    deleteCourse,
}