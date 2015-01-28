(function() {
	angular.module('myDirectives', [ ])

	
		.directive('toggleExpandCollapse', [function() {
			return {
				restrict: 'A',
				link : function($scope, element, attrs) {
					if(angular.isUndefined($scope.display)) {
						$scope.display = {};
					}

					attrs.$observe('toggleExpandCollapse', function(value) {
						if(angular.isUndefined($scope.display[value])) {
							$scope.display[value] = false;
						}

						element.on('click', function(event) {
							$scope.display[value] = !$scope.display[value];
							$scope.$digest();
						});
					});
				}
			}
		}])


		.directive('expandCollapse', [function() {
			return {
				restrict: 'A',
				link : function($scope, element, attrs) {
					attrs.$observe('expandCollapse', function(value) {
						$scope.$watch('display.'+value, function(newValue, oldValue) {
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
					});
				}
			}
		}])


		.directive('navbarItem', [ 'PATHS', function(PATHS) {
			return {
				restrict : 'E',
				templateUrl : PATHS.views.folder + PATHS.views.elements + 'navbar-item.html'
			};
		}])


		.directive('sectionStatus', [ 'PATHS', function(PATHS) {
			return {
				restrict : 'E',
				templateUrl : PATHS.views.folder + PATHS.views.elements + 'section-status.html'
			};
		}])


		.directive('main', [function() {
			return {
				restrict : 'E',
				link : function($scope, element, attrs) {
					$scope.$on('$routeChangeStart', function(event, data) {
						element.addClass('ajax');
					});
				}
			};
		}])


		.directive('text', [function() {
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
		}])


		.directive('youtube', [function() {
			return {
				restrict: 'E',
				link : function($scope, element, attrs) {
					attrs.$observe('video', function(value) {
						if(value != 'false') {
							element.html('<iframe width="100%" src="' + value + '" frameborder="0" allowfullscreen></iframe>');
						}
						else {
							element.html('');
						}
					});
				}
			}
		}]);

})();