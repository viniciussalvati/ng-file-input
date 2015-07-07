/// <reference path="../typings/tsd.d.ts" />

(function() {
	fileInput.$inject = [];
	function fileInput(): ng.IDirective {
		var fileTypeRegex = /^file$/i;

		return {
			restrict: 'E',
			require: '?ngModel',
			link: link
		}

		function link(scope: ng.IScope, element: JQuery, attrs: ng.IAttributes, ngModel?: ng.INgModelController) {
			if (ngModel && element[0].tagName === 'INPUT' && fileTypeRegex.test(attrs['type'])) {

				element.on('change', function() {
					var input = <HTMLInputElement>this;

					if ('multiple' in attrs) {
						var files = Array.prototype.map.call(input.files, (file) => file);

						ngModel.$setViewValue(files);
					} else {
						ngModel.$setViewValue(input.files[0]);
					}
				});
			}
		}
	}

	angular.module('ng-file-input', []).directive('input', fileInput);
} ());