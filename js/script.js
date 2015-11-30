var cardApp = angular.module('cardApp', ['naif.base64'])

	.controller('cardCreatorController', ['$scope', function($scope){
		$scope.logo = 'LOGO';
	}])

	.directive('cardFront', [function () {
		return {
			restrict: 'A',
			templateUrl: 'card-front.html'
		};
	}])