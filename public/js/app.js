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
			lists : '/index'
		}

	});

	app.constant('SECTIONS', [
		{ id : "info", controller : 'InfoController' },
		{ id : "experience", controller : 'ExperienceController' },
		{ id : "education", controller : 'EducationController' },
		{ id : "projects", controller : 'ProjectsController' },
		{ id : "linkedin", controller : 'LinkedInController', views : [ '/connect', '/load', '/done' ] },
		{ id : "lang", controller : '', noRoute : true },
		{ id : "about", controller : '' }
	]);

	app.config([ '$routeProvider', 'PATHS', 'SECTIONS', function($routeProvider, PATHS, SECTIONS) {
		var addRoute = function(sectionID, routePath, viewPath, controller) {
			$routeProvider.when('/' + routePath, {
				templateUrl : PATHS.views.folder + viewPath + '.html',
				controller : controller,
				controllerAs : controller? sectionID + 'Ctrl' : ''
			});
		}

		for(var i = 0; i < SECTIONS.length; i++) {
			var section = SECTIONS[i];

			if(angular.isUndefined(section.noRoute)) {
				var views = section.views || [ PATHS.views.lists ];

				// Root Route
				addRoute(section.id, section.id, section.id + views[0], section.controller);

				for(var j = 0; j < views.length; j++) {
					addRoute(section.id, section.id + views[j], section.id + views[j], section.controller);
				}
			}
		}

		$routeProvider.otherwise({
			redirectTo: '/' + SECTIONS[0].id
		});
	}]);

})();