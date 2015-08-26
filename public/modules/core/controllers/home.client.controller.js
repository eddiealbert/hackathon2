'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication, $modalInstance, $sce, url) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		
		

 
	}]);