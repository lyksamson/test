angular.module('users.factory', [])

    .factory('AllUser', function($http, $q, $filter) {  
		return {
			findAll: function () {
				var deferred = $q.defer();
				$http({ method: "POST", url: "json/users.json" })
					.success(function (data) {
						deferred.resolve(data);
					});
				return deferred.promise;
			},
			findById: function (id) {
				var deferred = $q.defer();
				$http({ method: "POST", url: "json/users.json" })
					.success(function (data) {
						var data = $filter('filter')(data, {id:id})[0];
						deferred.resolve(data);
					});
				return deferred.promise;
			}
		}
    });