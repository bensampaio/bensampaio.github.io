(function() {
	angular.module('mySections', [])
	
		/**
		 * Information Controller
		 */
		.controller('InfoController', [ '$scope', '$http', 'PATHS', function($scope, $http, PATHS) {
			$scope.info = {};

			$http.get('/' + PATHS.data.folder + 'info.json')
				.success(function(data) {
					$scope.info = data;
					for(var i = 0; i < data.languages.length; i++) {
						var lang = data.languages[i];
						lang.flag = PATHS.images.folder + PATHS.images.flags + lang.flag;
					}
				})
				.error(function(msg, code) {
					$scope.error = true;
					console.log(code + ' : ' + msg);
				});
		}])


		/**
		 * Experience Controller
		 */
		.controller('ExperienceController', [ '$scope', '$http', 'PATHS', function($scope, $http, PATHS) {
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
		}])


		/**
		 * Education Controller
		 */
		.controller('EducationController', [ '$scope', '$http', 'PATHS', function($scope, $http, PATHS) {
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
		}])


		/**
		 * Project Controller
		 */
		.controller('ProjectsController', [ '$scope', '$http', 'PATHS', function($scope, $http, PATHS) {
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
		}])


		/**
		 * About Controller
		 */
		.controller('AboutController', [ '$scope', '$http', 'PATHS', function($scope, $http, PATHS) {
			$scope.about = {};

			$http.get('/' + PATHS.data.folder + 'about.json')
				.success(function(data) {
					$scope.about = data;
				})
				.error(function(msg, code) {
					$scope.error = true;
					console.log(code + ' : ' + msg);
				});
		}])


		/**
		 * LinkedIn Controller
		 */
		.controller('LinkedInController', [ '$scope', '$route', function($scope, $route) {
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

})();