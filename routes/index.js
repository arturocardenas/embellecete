var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

 var mongoose = require('mongoose');
 var Expedientes = mongoose.model('Expedientes');
 
 //GET - Listar expedientes
 router.get('/expedientes', function(req, res, next){
	 Expedientes.find(function(err, expedientes){
		 if(err){return next(err)}
		 res.json(expedientes)
	 })
 })
 
 //POST - Agregar expediente
 router.post('/expediente', function(req, res, next){
	var expediente = new Expedientes(req.body);
	
	expediente.save(function(err, expediente){
		if(err){return next(err)}
		res.json(expediente);
	})
 })
 
//PUT - Actualizar expediente
router.put('/expediente/:id', function(req, res){
	Expedientes.findById(req.params.id, function(err, expediente){
		expediente.nombre = req.body.nombre;
		expediente.apellidos = req.body.apellidos;
		expediente.ocupacion = req.body.ocupacion;
		
		expediente.save(function(err){
			if(err){res.send(err)}
			res.json(expediente);
		})	
	})
})

//DELETE - Eliminar tarea
router.delete('/expediente/:id', function(req, res){
	Expedientes.findByIdAndRemove(req.params.id, function(err){
		if(err){res.send(err)}
		res.json({message: 'La tarea se ha eliminado'});
	})
})

module.exports = router;
