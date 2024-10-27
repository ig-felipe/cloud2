const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    cargo: { type: String, required: true },
});

module.exports = mongoose.model('Empleado', empleadoSchema);
