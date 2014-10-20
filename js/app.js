(function() {
	var app = angular.module('myself', [ 'ngAnimate', 'ngRoute', 'myNavigation', 'myPages' ]);

	app.constant('DEFAULTS', {
		title : 'Bruno Sampaio',
		lang : 'EN'
	});

	app.constant('PATHS', {
		data : {
			folder : 'db/'
		},
		images : {
			folder : 'img/'
		},
		views : {
			folder : 'views/',
			elements : 'elements/',
			lists : '/index.html'
		}

	});

	app.constant('SECTIONS', [
		{ id : "info", controller : 'InfoController' },
		{ id : "experience", controller : 'ExperienceController' },
		{ id : "education", controller : 'EducationController' },
		{ id : "projects", controller : 'ProjectsController' },
		{ id : "lang", controller : '', noRoute : true },
		{ id : "about", controller : '' }
	]);

	app.config([ '$routeProvider', 'PATHS', 'SECTIONS', function($routeProvider, PATHS, SECTIONS) {
		for(var i = 0; i < SECTIONS.length; i++) {
			var section = SECTIONS[i];

			if(angular.isUndefined(section.noRoute)) {
				$routeProvider.when('/' + section.id, {
					templateUrl : PATHS.views.folder + section.id + PATHS.views.lists,
					controller : section.controller,
					controllerAs : section.controller? section.id : ''
				});
			}
		}

		$routeProvider.otherwise({
			redirectTo: '/' + SECTIONS[0].id
		});
	}]);

})();