const express = require('express');
const router = express.Router();
const Venta = require('../models/Venta');

// Crear una nueva venta
router.post('/', async (req, res) => {
    const nuevaVenta = new Venta(req.body);
    try {
        const ventaGuardada = await nuevaVenta.save();
        res.status(201).json(ventaGuardada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener todas las ventas
router.get('/', async (req, res) => {
    try {
        const ventas = await Venta.find().populate('cliente empleado productos');
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Exportar las rutas
module.exports = router;
