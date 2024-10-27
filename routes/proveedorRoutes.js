const express = require('express');
const router = express.Router();
const Proveedor = require('../models/Proveedor');

// Crear un nuevo proveedor
router.post('/', async (req, res) => {
    const nuevoProveedor = new Proveedor(req.body);
    try {
        const proveedorGuardado = await nuevoProveedor.save();
        res.status(201).json(proveedorGuardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener todos los proveedores
router.get('/', async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.json(proveedores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Exportar las rutas
module.exports = router;
