//traemos express para poder traer router
const express = require('express');
const UsserControler = require('../controllers/UsserController');

const router = express.Router();

//requiere la ruta

router
	.route('/usser')
	.post(UsserControler.cargarusuario);

module.exports = router; //exporta
