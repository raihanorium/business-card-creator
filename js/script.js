var cardApp = angular.module('cardApp', ['naif.base64'])

	.controller('cardCreatorController', ['$scope', function($scope){
		$scope.info = {};
		$scope.logo = 'LOGO';

		$scope.info.fullName = 'Mr. Full Name Holder';
		$scope.info.jobTitle = 'Some Designation';
		$scope.info.phone = '01234 123 456';
		$scope.info.email = 'employee@somecompany.com';
		$scope.info.orgName = 'Some Company';
		$scope.info.orgWeb = 'www.somecompany.com';
		$scope.info.orgAddress = '11/2, Some Street,\nDhaka, Bangladesh';
	}])

	.directive('cardFront', [function () {
		return {
			restrict: 'A',
			templateUrl: 'card-front.html'
		};
	}])