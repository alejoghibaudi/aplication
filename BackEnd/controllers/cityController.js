const City = require('../models/citymodels');
const citycontroller = {
	listarciudades: async (req, res) => {
		const data = await City.find();
		res.json({ Respuesta: data });
	},

	cargarciudades: async (req, res) => {
		var ciudad = req.body.ciudad;
		var pais = req.body.pais;
		var img = req.body.img;
		//grabamos en la base de datos

		const nuevaciudad = new City({
			ciudad,
			pais,
			img
		});

		await nuevaciudad.save(); //espera grabar la factura
		res.send('Ciudad Cargada'); //luego manda el mesnaje
	},
	borrarciudades: async (req, res) => {
		var id = req.params.id;
		await City.findOneAndDelete({ _id: id }),
			res.json('Respuesta: Factura Borrada');
	},
	modificarcidudades: async (req, res) => {
		var id = req.params.id;
		var ciudad = req.body.ciudad;
		var pais = req.body.pais;
		var img = req.body.img;

		await City.findOneAndUpdate({ _id: id }, { ciudad: ciudad, pais: pais, img: img });
		res.send("Ciudad Modificada" );
	}

	//CUANDO  LLAMEN A CITYCONTROLER Y USEN ESTE METODO
	//QUE EJECUTE ESO
};

module.exports = citycontroller;
//EL ROUTER DERIVA EL METODO DE LA REQ
