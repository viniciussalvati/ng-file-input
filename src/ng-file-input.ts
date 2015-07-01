/// <reference path="../typings/tsd.d.ts" />

(function() {
	fileInput.$inject = [];
	function fileInput(): ng.IDirective {
		return {
			restrict: 'E',
			require: '?ngModel',
			link: link
		}

		function link(scope: ng.IScope, element: JQuery, attrs: ng.IAttributes, ngModel?: ng.INgModelController) {
			if (ngModel && element[0].tagName === 'INPUT') {
				element.on('change', function() {
					var input = <HTMLInputElement>this;

					ngModel.$setViewValue(input.files[0]);
				});
			}
		}
	}

	angular.module('ng-file-input', []).directive('input', fileInput);
} ())