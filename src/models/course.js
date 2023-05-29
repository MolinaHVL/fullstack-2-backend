const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    materia: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true,
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }],
    videos: [{
        url: String
    }],
    imagenPortada: {
        type: String
    },
    comments: [{
        profilePhoto: String,
        from: String,
        message: String,
    }]
});

module.exports = mongoose.model('Course', CourseSchema);