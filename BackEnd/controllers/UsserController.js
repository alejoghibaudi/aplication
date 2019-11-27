const NewUsser = require('../models/NewUssermodels');
const UsserController = {
	cargarusuario: async (req, res) => {
		var name = req.body.name;
        var secondname = req.body.secondname;
        var ussername=req.body.ussername;
		var email=req.body.email;
		var password=req.body.password;
        var img=req.body.img;
		//grabamos en la base de datos

		const nuevousuario = new NewUsser({
            name,
            secondname,
			ussername,
			email,
            password,
            img
		}); 

		await nuevousuario.save(); //espera grabar la factura
		res.send('Usuario Cargado'); //luego manda el mesnaje
		
	},
	//CUANDO  LLAMEN A CITYCONTROLER Y USEN ESTE METODO
	//QUE EJECUTE ESO
};

module.exports = UsserController;
//EL ROUTER DERIVA EL METODO DE LA REQ
