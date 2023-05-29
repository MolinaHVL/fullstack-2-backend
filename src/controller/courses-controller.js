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

const saveCourse = async (req, res) => {

    console.log('guardando curso...')

    const { titulo, materia, descripcion, idMaestro, videos } = req.body;

    console.log(videos)

    const savedCourse = await CourseServices.saveCourse(titulo, materia, descripcion, idMaestro, videos);

    res.status(201).json(savedCourse);
};

const deleteCourse = async (req, res) => {
    const { id } = req.params;

    await CourseServices.deleteCourse(id);

    res.status(204).send()
};

module.exports = {
    getCourses,
    getCourseById,
    saveCourse,
    deleteCourse,
}