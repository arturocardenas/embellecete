var mongoose = require('mongoose');

var ExpedientesSchema = new mongoose.Schema({
	nombre: String,
	apellidos: String
	/*,
	fecha_nacimiento: Date,
	UserSchema.methods.edad = function() {
		return ~~((Date.now()-this.fecha_nacimiento)/(31557600000));
	}
	sexo: String,
	estado_civil: String,
	hijos: String,
	ocupacion: String,
	telefonos: Array,
	facebook: String,
	correo: String,
	direccion: [{
			calle: String,
			numero: String,
			colonia: String,
			codigo_postal: Integer,
			ciudad: String,
			estado: String,
			pais: String
	}],
	referencias: Array,
	procedimientos: [{
		titulo: String,
		fecha: Date,
		localizacion: String,
		fecha_programada: Date,
		detalles: String,
		cirugias_previas: Boolean,
		cirugias_previas_detalle: String,
		alergias: Boolean,
		alergias_detalle: String,
		peso: String,
		estatura: String,
		talla: String,
		copa_actual: String,
		copa_deseada: String,
		implantes: String,
		fajas: String,
		estudios: String,
		via_seguimiengo: String,
		estado: Integer,
		notas_seguimiento: [{
			titulo: String,
			descripcion: String,
			fecha: Date,
			autor: String
		}],
		notas_evolucion: [{
			titulo: String,
			descripcion: String,
			fecha: Date,
			autor: String
		}],
		valoracion: [{
			tipo: String,
			procedimiento: String,
			nota: String,
			precio: Double,
			moneda: String
		}],
		pagos: [{
			fecha: Date,
			forma_pago: String,
			pago: Double,
			moneda: String,
			nota: String
		}],
		citas: [{
			fecha_registro: Date,
			fecha_inicio: Date,
			fecha_fin: Date,
			proposito: String
		}]	
	}],
	botox: [{
		fecha_registro: Date,
		fecha_aplicacion: Date,
		fecha_vencimiento: Date,
		area_aplicacion: String,
		volumen_inyectado: String,
		fecha_caducidad: Date,
		numero_lote: String,
		volumen_dilusion: String,
		tipo: String,
		detalles: String
	}]*/
});

mongoose.model('Expedientes', ExpedientesSchema);