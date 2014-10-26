(function() {
	var app = angular.module('myPages', [ ]);

	var setLogoImgURLs = function(list, PATHS) {
		var generalPath = PATHS.images.folder + PATHS.images.logos, 
			defaultLogoFile = 'none.png';

		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			if(!item.institution) {
				item.institution = {};
			}
			item.institution.logo = generalPath + (item.institution && item.institution.logo? item.institution.logo : defaultLogoFile);
		}
	}
	
	
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
				$scope.error = true;
				console.log(code + ' : ' + msg);
			});
	}]);


	/**
	 * Experience Controller
	 */
	app.controller('ExperienceController', [ '$scope', '$http', 'PATHS', function($scope, $http, PATHS) {
		$scope.experience = [];

		$http.get('/' + PATHS.data.folder + 'experience.json')
			.success(function(data) {
				setLogoImgURLs(data, PATHS);
				$scope.experience = data;
			})
			.error(function(msg, code) {
				$scope.error = true;
				console.log(code + ' : ' + msg);
			});
	}]);


	/**
	 * Education Controller
	 */
	app.controller('EducationController', [ '$scope', '$http', 'PATHS', function($scope, $http, PATHS) {
		$scope.education = [];

		$http.get('/' + PATHS.data.folder + 'education.json')
			.success(function(data) {
				setLogoImgURLs(data, PATHS);
				$scope.education = data;
			})
			.error(function(msg, code) {
				$scope.error = true;
				console.log(code + ' : ' + msg);
			});
	}]);


	/**
	 * Project Controller
	 */
	app.controller('ProjectsController', [ '$scope', '$http', 'PATHS', function($scope, $http, PATHS) {
		$scope.projects = [];

		$http.get('/' + PATHS.data.folder + 'projects.json')
			.success(function(data) {
				setLogoImgURLs(data, PATHS);
				$scope.projects = data;
			})
			.error(function(msg, code) {
				$scope.error = true;
				console.log(code + ' : ' + msg);
			});
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
			connect : function() {
				$scope.$emit('$routeChangeStart');
			},
			load : function() {
				$scope.$emit('$routeChangeStart');
			}
		};

		$scope.error = !($route.current.params.success == "true");

	}]);

})();