angular.module('appPrincipal', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('calendario',{
				url:'/calendario',
				templateUrl:'views/calendario.html'
			})
			.state('expedientes',{
				url: '/expedientes',
				templateUrl: 'views/expedientes.html',
				controller: 'ctrlExpedientes'
			})
			.state('expediente',{
				url:'/expediente',
				templateUrl:'views/expediente.html',
				controller:'cntrlExpediente'
			})
			.state('movimientos',{
				url:'/movimientos',
				templateUrl:'views/movimientos.html'
			});
			$urlRouterProvider.otherwise('expedientes');
	})
	.factory('servicio', function($http){
		var servicio = {}
		servicio.expedientes = [];
		servicio.expediente = {};

		/*** Seccion de metodos remotos ***/
		servicio.getAll = function(){
			return $http.get('/expedientes')
			.success(function(data){
				angular.copy(data, servicio.expedientes)
				return servicio.expedientes
			})
		}

		servicio.add = function(expediente){
			return $http.post('/expediente', expediente)
			.success(function(expediente){
				servicio.expedientes.push(expediente);
			})
		}

		servicio.update = function(expediente){
			return $http.put('/expediente/' + expediente._id, expediente)
			.success(function(data){
				var indice = servicio.expedientes.indexOf(expediente);
				servicio.expedientes[indice] = data;
			})
		}

		servicio.delete = function(expediente){
			return $http.delete('/expediente/' + expediente._id)
			.success(function(){
				var indice = servicio.expedientes.indexOf(expediente);
                servicio.expedientes.splice(indice, 1);
			})
		}

		return servicio;
	})
	.controller('ctrlExpedientes', function($scope, $state, servicio){
		servicio.getAll();
		$scope.expediente = servicio.expediente;
		$scope.expedientes = servicio.expedientes;

		$scope.agregar = function(){
			servicio.add({
				nombre: $scope.expediente.nombre,
				apellidos: $scope.expediente.apellidos,
				telefonos: $scope.expediente.telefonos,
				referencias: $scope.expediente.referencias
			})
			$scope.expediente.nombre='';
			$scope.expediente.apellidos='';
			$scope.expediente.telefonos='';
			$scope.expediente.referencias='';
		}

		$scope.actualizar = function(){
			servicio.update($scope.expediente);
		}

		$scope.eliminar = function(expediente){
			servicio.delete(expediente);
		}

		$scope.verExpediente = function(expediente){
			servicio.expediente=expediente;
			$state.go('expediente');
		}
	})
	.controller('cntrlExpediente',function($scope, $state, servicio){
		$scope.expediente = servicio.expediente;
		$scope.actualizar = function(){
			servicio.update($scope.expediente);
			$state.go('expedientes');
		}
		/*
		$scope.addTelefono=function(addTipo,addNumero){
			$scope.expediente.telefonos.push({tipo:addTipo,numero:addNumero});
			servicio.expediente.telefonos=$scope.expediente.telefonos;
		}*/
	})
