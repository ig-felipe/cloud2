const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const proveedorRoutes = require('./routes/proveedorRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const ventaRoutes = require('./routes/ventaRoutes');

const productoRoutes = require('./routes/productoRoutes'); // Importar las rutas de productos
app.use('/api/products', productoRoutes); // Usar las rutas de productos en la API


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a MongoDB (cambia la URI a la tuya)

const uri = "mongodb+srv://root:12345@cloud.woupt.mongodb.net/?retryWrites=true&w=majority&appName=cloud";

mongoose.connect(uri)
.then(() => console.log('Conexión a la base de datos exitosa'))
.catch(err => console.error('Error al conectar a la base de datos:', err));


// Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de gestión de inventario');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


app.use('/api/proveedores', proveedorRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/empleados', empleadoRoutes);
app.use('/api/ventas', ventaRoutes);