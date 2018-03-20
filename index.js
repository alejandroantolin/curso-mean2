'use strict'

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/curso_mean2', (err) => {
	if(err) {
		console.log('Error al conectarse a la base de datos.');
		throw err;
	}
	console.log('La conexión a la base de datos funciona correctamente');
	
});