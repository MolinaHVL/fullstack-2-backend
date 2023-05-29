const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  correo: {
    type: String,
    required: true
  },
  clave: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  apellidoP: {
    type: String,
    required: true
  },
  apellidoM: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  fechaNac: {
    type: Date,
    required: true
  },
  celular: {
    type: String,
    required: true
  },
  pais: {
    type: String,
    required: false
  },
  estado: {
    type: String,
    required: false
  },
  ciudad: {
    type: String,
    required: false
  },
  picture: {
    type: String, // assuming the picture will be stored as a URL link
    required: true
  },
  descripcion: {
    type: String, // assuming the picture will be stored as a URL link
  },
});

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
