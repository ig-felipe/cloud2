const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    contacto: { type: String, required: true },
    telefono: { type: String, required: true },
    direccion: { type: String, required: true },
    productos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto' }]
});

module.exports = mongoose.model('Proveedor', proveedorSchema);
