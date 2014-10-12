(function() {
	var app = angular.module('myControllers', [ ]);

	/**
	 * Navigation Controller
	 */
	app.controller('NavigationController', [ '$scope', '$route', 'DEFAULTS', 'PATHS', 'SECTIONS', function($scope, $route, DEFAULTS, PATHS, SECTIONS) {
		var ctrl = this;

		this.currentSection = {};
		this.sectionsById = {};

		var Section = function(id, title, img, visible) {
			this.id = id;
			this.title = title;
			this.img = img;
			this.linkClasses = "navbar-item-" + id;
			this.contentClasses = "main-section-" + id;
			this.visible = visible;

			ctrl.sectionsById[id] = this;
		}

		this.setCurrentSection = function(section) {
			this.currentSection = section;
		}

		this.homeSection = new Section(
			SECTIONS[0].id,
			DEFAULTS.title,
			PATHS.images.folder + "author-picture.jpg",
			true
		);

		this.infoSections = [
			new Section(SECTIONS[1].id, "Experience", null, true),
			new Section(SECTIONS[2].id, "Education", null, true),
			new Section(SECTIONS[3].id, "Projects", null, true),
			new Section(SECTIONS[4].id, "Others", null, false)
		];

		this.generalSections = [
			new Section(SECTIONS[5].id, "Language", null, false),
			new Section(SECTIONS[6].id, "About this Site", null, true)
		];

		$scope.$on('$routeChangeStart', function(event, data) {
			angular.element(document.querySelector('main')).addClass('ajax');
		});

		$scope.$on('$routeChangeSuccess', function(event, data) {
			var paths = data.loadedTemplateUrl.split('/');

			if(paths.length == 3 && paths[1] in ctrl.sectionsById) {
				ctrl.setCurrentSection(ctrl.sectionsById[paths[1]]);
			}
		});

	}]);

	app.directive('navbarItem', [ 'PATHS', function(PATHS) {
		return {
			restrict : 'E',
			templateUrl : PATHS.views.folder + PATHS.views.elements + 'navbar-item.html'
		};
	}]);

	
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