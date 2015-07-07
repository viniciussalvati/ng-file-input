/// <reference path="../typings/tsd.d.ts" />

interface ngFileAttributes {
	maxSize: string;
	type: string;
}

(function() {
	var fileTypeRegex = /^file$/i;

	function validateSize(value: File, maxSize?: number) {
		if (!maxSize) return true;

		return value.size <= maxSize;
	}

	fileInput.$inject = [];
	function fileInput(): ng.IDirective {
		return {
			restrict: 'E',
			require: '?ngModel',
			link: link
		}

		function link(scope: ng.IScope, element: JQuery, attrs: ngFileAttributes, ngModel?: ng.INgModelController) {
			if (ngModel && element[0].tagName === 'INPUT' && fileTypeRegex.test(attrs.type)) {

				element.on('change', function() {
					var input = <HTMLInputElement>this;
					var maxSize = scope.$eval(attrs.maxSize);
					var result: any;

					if ('multiple' in attrs) {
						var files: File[] = Array.prototype.map.call(input.files, (file) => file);

						files = files.filter((f) => validateSize(f, maxSize));

						if (files.length) {
							result = files;
						}
					} else {
						var file = input.files[0];

						if (validateSize(file, maxSize)) {
							result = file;
						}
					}

					ngModel.$setViewValue(result);
				});
			}
		}
	}

	angular.module('ng-file-input', []).directive('input', fileInput);
} ());