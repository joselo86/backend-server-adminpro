// Requires (Importación de librerias de terceros)
var express = require('express');
var mongoose = require('mongoose');


// Inicializar las variables
var app = express();

// Conexión a la base de datos utilizando mongoose
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Bases de datos: \x1b[32m%s\x1b[0m', 'online');
})

// Definiendo las rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
})

// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
})