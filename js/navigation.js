(function() {
	var app = angular.module('myNavigation', [ ]);

	/**
	 * Navigation Controller
	 */
	app.controller('NavigationController', [ '$scope', '$route', 'DEFAULTS', 'SECTIONS', function($scope, $route, DEFAULTS, SECTIONS) {
		var ctrl = this;
		var sectionIndex = 0;

		this.currentSection = {};
		this.sectionsById = {};

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

		this.setCurrentSection = function(section) {
			this.currentSection = section;
			$scope.displayNavbarMenu = false;
		}

		this.homeSection = new Section(SECTIONS[sectionIndex++].id, DEFAULTS.title, 'author-picture', true);

		this.infoSections = [
			new Section(SECTIONS[sectionIndex++].id, "Experience", 'fa-file-text', true),
			new Section(SECTIONS[sectionIndex++].id, "Education", 'fa-graduation-cap', true),
			new Section(SECTIONS[sectionIndex++].id, "Projects", 'fa-code', true)
		];

		this.generalSections = [
			new Section(SECTIONS[sectionIndex++].id, "Language", '', false),
			new Section(SECTIONS[sectionIndex++].id, "About this Site", 'fa-info-circle', true)
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

	app.directive('navbarMenu', [function () {
		return {
			restrict: 'C',
			link: function ($scope, element, attrs) {
				$scope.displayNavbarMenu = false;

				element.on('click', function(event) {
					$scope.displayNavbarMenu = !$scope.displayNavbarMenu;
					$scope.$digest();
				});
			}
		};
	}]);

	app.directive('navbarList', [function () {
		return {
			restrict: 'C',
			link: function ($scope, element, attrs) {
				$scope.$watch('displayNavbarMenu', function(newValue, oldValue) {
					var classToAdd, classToRemove;

					if(newValue) {
						classToAdd = 'expanded';
						classToRemove = 'collapsed';
					}
					else {
						classToAdd = 'collapsed';
						classToRemove = 'expanded';
					}

					element.removeClass(classToRemove).addClass(classToAdd);
				});
			}
		};
	}])

	app.directive('navbarItem', [ 'PATHS', function(PATHS) {
		return {
			restrict : 'E',
			templateUrl : PATHS.views.folder + PATHS.views.elements + 'navbar-item.html'
		};
	}]);

})();