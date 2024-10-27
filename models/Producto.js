const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' } // Relación con proveedor
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;