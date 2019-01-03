(function() {
	angular.module('myNavigation', [])

		/**
		 * Navigation Controller
		 */
		.controller('NavigationController', [ '$scope', '$route', '$http', 'SECTIONS', 'PATHS', function($scope, $route, $http, SECTIONS, PATHS) {
			var ctrl = this;
			var sectionIndex = 0;
			var isLocalhost = [ 'localhost', '0.0.0.0', '127.0.0.1' ].indexOf(location.hostname) >= 0;

			/*
			 * Controller properties
			 */
			this.currentSection = {};
			this.sectionsById = {};

			this.setCurrentSection = function(section) {
				this.currentSection = section;
				$scope.display.navbarMenu = false; // Hide navbar menu on section click
			}

			/*
			 * Section Constructor
			 */
			var Section = function(id, title, icon, visible) {
				this.id = id;
				this.title = title;
				this.icon = icon;
				this.linkClasses = "navbar-item-" + id;
				this.contentClasses = "main-section-" + id;
				this.visible = visible;

				ctrl.sectionsById[id] = this;
			}

			Section.prototype.isCurrent = function() {
				return this.id == ctrl.currentSection.id;
			}

			/*
			 * Scope Properties
			 */
			$scope.homeSection = null;
			$scope.authorSections = [];
			$scope.infoSections = [];

			$scope.getToday = function() {
				return new Date();
			}

			/*
			 * Scope Events
			 */
			$scope.$on('$routeChangeSuccess', function(event, data) {
				if(data.loadedTemplateUrl) {
					var paths = data.loadedTemplateUrl.split('/');

					if(paths.length == 3 && paths[1] in ctrl.sectionsById) {
						ctrl.setCurrentSection(ctrl.sectionsById[paths[1]]);
					}
				}
			});

			/*
			 * Load author basic info and create sections
			 */
			$http.get('/' + PATHS.data.folder + 'my.json')
				.success(function(data) {
					$scope.homeSection = new Section(SECTIONS[sectionIndex++].id, data.fullName, data.picture, true);

					$scope.authorSections = [
						new Section(SECTIONS[sectionIndex++].id, "Experience", 'fa-file-text', true),
						new Section(SECTIONS[sectionIndex++].id, "Education", 'fa-graduation-cap', true),
						new Section(SECTIONS[sectionIndex++].id, "Projects", 'fa-code', true)
					];

					$scope.infoSections = [
						new Section(SECTIONS[sectionIndex++].id, "LinkedIn", 'fa-linkedin-square', isLocalhost),
						new Section(SECTIONS[sectionIndex++].id, "Language", '', false),
						new Section(SECTIONS[sectionIndex++].id, "About this Site", 'fa-info-circle', true)
					];
				})
				.error(function(msg, code) {
					$scope.error = true;
					console.log(code + ' : ' + msg);
				});

		}]);

})();