(function() {
	angular.module('myFilters', [])

		.filter('startOn', [function() {
			return function(input, startIndex) {
				if(angular.isArray(input)) {
					return input.slice(parseInt(startIndex));
				}
			}
		}])

		.filter('timeInterval', [ '$filter', function($filter) {
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