/// <reference path="../typings/tsd.d.ts" />
(function () {
    fileInput.$inject = [];
    function fileInput() {
        return {
            restrict: 'E',
            require: '?ngModel',
            link: link
        };
        function link(scope, element, attrs, ngModel) {
            if (ngModel && element[0].tagName === 'INPUT') {
                element.on('change', function () {
                    var input = this;
                    if ('multiple' in attrs) {
                        var files = Array.prototype.map.call(input.files, function (file) { return file; });
                        ngModel.$setViewValue(files);
                    }
                    else {
                        ngModel.$setViewValue(input.files[0]);
                    }
                });
            }
        }
    }
    angular.module('ng-file-input', []).directive('input', fileInput);
}());

//# sourceMappingURL=ng-file-input.js.map