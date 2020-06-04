// Importación de express
var express = require('express');


var app = express();
// Libreria para importar path
const path = require('path');
// Verificar si el paht es valido con fs
const fs = require('fs');

// Definiendo la ruta principal
app.get('/:tipo/:img', (req, res, next) => {


    var tipo = req.params.tipo;
    var img = req.params.img;

    //Verificar si existe la imagen
    var pathImagen = path.resolve(__dirname, `../uploads/${tipo}/${img}`);

    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    } else {
        var pathNoImage = path.resolve(__dirname, '../assets/no-img.jpg');
        res.sendFile(pathNoImage);
    }

})

module.exports = app;


/* OTRA OPCION */
/* 
var express = require('express');
var fs = require('fs');

var app = express();


app.get('/:tipo/:img', (req, res, next) => {

    var tipo = req.params.tipo;
    var img = req.params.img;

    var path = `./uploads/${ tipo }/${ img }`;

    fs.exists(path, existe => {

        if (!existe) {
            path = './assets/no-img.jpg';
        }


        res.sendfile(path);

    });


});

module.exports = app; */