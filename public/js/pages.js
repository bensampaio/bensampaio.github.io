(function() {
	var app = angular.module('myPages', [ ]);

	app.directive('main', [function() {
		return {
			restrict : 'E',
			link : function($scope, element, attrs) {
				$scope.$on('$routeChangeStart', function(event, data) {
					element.addClass('ajax');
				});
			}
		};
	}]);

	app.directive('text', [function() {
		return {
			restrict : 'E',
			scope : {
				data : '='
			},
			link : function($scope, element, attrs) {
				$scope.$watch('data', function() {
					var content = '';

					if($scope.data) {
						for(var i = 0; i < $scope.data.length; i++) {
							var item = $scope.data[i];

							if(item instanceof Array) {
								content+= '<ul>';

								for(var j = 0; j < item.length; j++) {
									content+= '<li>' + item[j] + '</li>';
								}

								content+= '</ul>';
							}
							else {
								content+= '<p>' + item + '</p>';
							}
						}
					}

					element.html(content);
				});
			}
		};
	}]);


	app.filter('startOn', function() {
		return function(input, startIndex) {
			if(input instanceof Array) {
				return input.slice(parseInt(startIndex));
			}
		}
	});
	
	
	/**
	 * Information Controller
	 */
	app.controller('InfoController', [ '$scope', '$http', 'PATHS', function($scope, $http, PATHS) {
		$scope.info = {};

		$http.get('/' + PATHS.data.folder + 'info.json')
			.success(function(data) {
				$scope.info = data;
			})
			.error(function(msg, code) {

			});
	}]);


	/**
	 * Experience Controller
	 */
	app.controller('ExperienceController', [ '$http', 'PATHS', function($http, PATHS) {
		var self = this;

		self.positions = [];

		/*$http.get('/' + PATHS.data.folder + 'experience.json')
			.success(function(data) {
				self.positions = data;
			})
			.error(function(msg, code) {

			});*/
	}]);


	/**
	 * Education Controller
	 */
	app.controller('EducationController', [ '$http', 'PATHS', function($http, PATHS) {
		var self = this;

		self.courses = [];

		/*$http.get('/' + PATHS.data.folder + 'education.json')
			.success(function(data) {
				self.courses = data;
			})
			.error(function(msg, code) {

			});*/
	}]);


	/**
	 * Project Controller
	 */
	app.controller('ProjectsController', [ '$http', 'PATHS', function($http, PATHS) {
		var self = this;

		self.projects = [];

		/*$http.get('/' + PATHS.data.folder + 'projects.json')
			.success(function(data) {
				self.projects = data;
			})
			.error(function(msg, code) {

			});*/
	}]);

	/**
	 * LinkedIn Controller
	 */
	app.controller('LinkedInController', [ '$scope', '$route', function($scope, $route) {
		var self = this;

		$scope.linkedin = {
			apiKey : '',
			apiSecret : '',
			oauthUserToken : '',
			toLoad : {
				profile : true
			},
			success : !!$route.current.params.success,
			connect : function() {
				$scope.$emit('$routeChangeStart');
			},
			load : function() {
				$scope.$emit('$routeChangeStart');
			}
		};

	}]);

})();