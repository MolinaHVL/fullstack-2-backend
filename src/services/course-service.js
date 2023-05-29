const CourseModel = require('../models/course')

const getCourses = async () => {
    const courses = await CourseModel.find().populate('teacher').populate('students').lean().exec();
    return courses;
};

const getCourseById = async (id) => {
    const course = await CourseModel.findById(id).lean().exec()
    return course
};

const saveCourse = async (titulo, materia, descripcion, teacher, videos) => {
    let course;
    try {
        course = new CourseModel({
            titulo,
            materia,
            descripcion,
            teacher,
            videos
        });
        console.log(teacher)
        await course.save();
    } catch (error) {
        return error
    }
    return course
};

const deleteCourse = async (id) => {
    return await CourseModel.findByIdAndDelete().exec()
};

module.exports = {
    getCourses,
    getCourseById,
    saveCourse,
    deleteCourse,
};