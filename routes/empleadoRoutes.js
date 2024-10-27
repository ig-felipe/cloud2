const express = require('express');
const router = express.Router();
const Empleado = require('../models/Empleado');

// Crear un nuevo empleado
router.post('/', async (req, res) => {
    const nuevoEmpleado = new Empleado(req.body);
    try {
        const empleadoGuardado = await nuevoEmpleado.save();
        res.status(201).json(empleadoGuardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener todos los empleados
router.get('/', async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Exportar las rutas
module.exports = router;
