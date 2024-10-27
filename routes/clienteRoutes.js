const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');

// Crear un nuevo cliente
router.post('/', async (req, res) => {
    const nuevoCliente = new Cliente(req.body);
    try {
        const clienteGuardado = await nuevoCliente.save();
        res.status(201).json(clienteGuardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener todos los clientes
router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Exportar las rutas
module.exports = router;
