const CourseModel = require('../models/course')

const getCourses = async () => {
    const courses = await CourseModel.find().populate('teacher').populate('students').lean().exec();
    return courses;
};

const getCourseById = async (id) => {
    const course = await CourseModel.findById(id).lean().exec()
    return course
};

const getEnrolledCourses = async (id) => {

    const courses = await CourseModel.find({
        students: id,
    }).populate('teacher').populate('students').lean().exec();

    return courses
}

const getUnEnrolledCourses = async (id) => {

    const courses = await CourseModel.find({
        students: { $nin: [id] },
    }).populate('teacher').populate('students').lean().exec();

    return courses
}

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

const modifyCourse = async (id, newComment) => {
    console.log("agregando comentario...")
    const course = await CourseModel.findById(id);


    const { profilePhoto, from, message } = newComment;

    // Add new comment to course
    course.comments.push({ profilePhoto, from, message });
    console.log(course)
    // Save updated course to database
    await course.save();
};

const enrollCourse = async (courseId, studentId) => {
    const course = await CourseModel.findById(courseId);

    // Check if student is already enrolled
    if (course.students.includes(studentId)) {
        return res.status(400).json({ error: "Student is already enrolled in this course" });
    }

    course.students.push(studentId);
    await course.save();

    return course.students
};

const unEnrollCourse = async (courseId, studentId) => {
    const course = await CourseModel.findByIdAndUpdate(
        courseId,
        { $pull: { students: studentId } },
        { new: true }  // return the updated document
    );

    return course
};

const deleteCourse = async (id) => {
    return await CourseModel.findByIdAndDelete().exec()
};

module.exports = {
    getCourses,
    getCourseById,
    getEnrolledCourses,
    getUnEnrolledCourses,
    saveCourse,
    modifyCourse,
    enrollCourse,
    unEnrollCourse,
    deleteCourse,
};