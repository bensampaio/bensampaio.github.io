(function() {
	var app = angular.module('myself', [ 'ngAnimate', 'ngRoute', 'myDirectives', 'myNavigation', 'myPages' ]);

	app.constant('PATHS', {
		data : {
			folder : 'db/'
		},
		images : {
			folder : 'public/img/',
			flags : 'flags/',
			logos : 'logos/'
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
		{ id : "about", controller : 'AboutController' }
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

	app.filter('startOn', [function() {
		return function(input, startIndex) {
			if(input instanceof Array) {
				return input.slice(parseInt(startIndex));
			}
		}
	}]);

	app.filter('timeInterval', [ '$filter', function($filter) {
		return function(input) {
			var result = [];

			if(input) {
				var parsePeriod = function(date) {
					var format = [];
					var day = 1;
					var month = 0;
					var year = parseInt(date.year);

					if(date.day) {
						day = parseInt(date.day);
						format.push('d');
					}

					if(date.month) {
						month = parseInt(date.month) - 1;
						format.push('MMMM');
					}

					format.push('yyyy');

					return {
						date : new Date().setFullYear(year, month, day),
						format : format.join(' ')
					}
				}

				// Parse start date
				if(angular.isObject(input.from)) {
					var obj = parsePeriod(input.from);
					result.push($filter('date')(obj.date, obj.format));
				}

				// Parse end date
				if(angular.isObject(input.to)) {
					var obj = parsePeriod(input.to);
					result.push($filter('date')(obj.date, obj.format));
				}
				else {
					result.push('Now');
				}
			}
			return result.join(' - ');
		}
	}]);

})();