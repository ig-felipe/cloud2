const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    fecha: { type: Date, default: Date.now },
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    empleado: { type: mongoose.Schema.Types.ObjectId, ref: 'Empleado', required: true },
    productos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true }],
    total: { type: Number, required: true }
});

module.exports = mongoose.model('Venta', ventaSchema);
