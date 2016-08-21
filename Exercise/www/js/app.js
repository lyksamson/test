angular.module('webApp', ['ionic', 'users.factory', 'users.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider

	.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	})
	
	.state('app.user-index', {
		url: '^/users',
		views: {
			'menuContent': {
			  templateUrl: 'templates/user-index.html',
			  controller: 'UserIndexCtrl'
			}
		}
	})
	
	.state('app.user-detail', {
		url: '^/users/:id',
		views: {
			'menuContent': {
				templateUrl: 'templates/user-detail.html',
				controller: 'UserDetailCtrl'
			}
		}
	});
	
	$urlRouterProvider.otherwise('/users');
	
});
