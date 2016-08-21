angular.module('users.controllers', [])

    .controller('AppCtrl', function($scope) {})
	
	.controller('UserIndexCtrl', function($scope, AllUser) {
		$scope.search = "";
		$scope.clearSearch = function () {
			$scope.search = "";
		};
		AllUser.findAll().then(function (users) {
			$scope.users = users;
		});
	})
	
	.controller('UserDetailCtrl', function($scope, $stateParams,AllUser) {
		AllUser.findById($stateParams.id).then(function(users) {
			$scope.user = users;
		});
	});