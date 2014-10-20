(function() {
	var app = angular.module('myPages', [ ]);
	
	
	/**
	 * Information Controller
	 */
	app.controller('InfoController', [ '$http', 'PATHS', function($http, PATHS) {
		var self = this;

		self.info = {};

		/*$http.get('/' + PATHS.data.folder + 'info.json')
			.success(function(data) {
				self.info = data;
			})
			.error(function(msg, code) {

			});*/
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

})();