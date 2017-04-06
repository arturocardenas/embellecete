angular.module('appPrincipal', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('calendario',{
				url:'/calendario',
				templateUrl:'views/calendario.html'
			})
			.state('expediente',{
				url: '/expediente',
				templateUrl: 'views/expediente.html',
				controller: 'ctrlExpediente'
			})
			.state('movimientos',{
				url:'/movimientos',
				templateUrl:'views/movimientos.html'
			});
			$urlRouterProvider.otherwise('expediente');
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
	.controller('ctrlExpediente', function($scope, servicio){
		$scope.expediente = {}
		$scope.expedientes = servicio.expedientes;
		
		$scope.agregar = function(){
			$scope.expedientes.push({
				nombre: $scope.expediente.nombre,
				apellido: $scope.expediente.apellido,
				area: $scope.expediente.area,
				local: $scope.expediente.local,
				numero: $scope.expediente.numero,
				extension: $scope.expediente.extension,
				referencia: $scope.expediente.referencia
			})
			$scope.expediente.nombre='';
			$scope.expediente.apellido='';
			$scope.expediente.area='';
			$scope.expediente.local='';
			$scope.expediente.numero='';
			$scope.expediente.extension='';
			$scope.expediente.referencia='';
		}
		
		$scope.eliminar = function(expediente){
			servicio.delete(expediente);
		}
		
	})