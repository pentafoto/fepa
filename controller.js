var fepaApp = angular.module('fepaApp', ['ngTouch','ngAnimate','cgBusy']);



fepaApp.controller('EntePerCodiceFiscale', ['$scope', '$window','$http', function ($scope,$window,$http) {
	$scope.delay = 0;
	$scope.minDuration = 0;
	$scope.message = 'sto cercando...';
	$scope.backdrop = true;
	$scope.promise = null;
    $scope.doGreeting = function(codiceFiscale) {
    	$scope.promise = $http({method: 'GET', url: 'http://94.198.100.105:8080/fepa/rest/enti/cf/'+codiceFiscale}).
		      success(function(data, status, headers, config) {
		    	  $scope.amministrazione = data;
		    	  $scope.status = status;
			      $scope.headers = headers;
			      $scope.config = config;
		      }).
		      error(function(data, status, headers, config) {
		    	  $scope.status = status;
//		    	  $window.alert('status '+status);
		      });
	  };
	}]);







