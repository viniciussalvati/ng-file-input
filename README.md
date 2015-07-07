# ng-file-input
ngModel directive for file inputs

## Installation

##### Install with bower

```
bower install ng-file-input --save
```

##### Add script to HTML

```
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/ng-file-input/dist/ng-file-input.js"></script>
````

##### Import in your module definition

```js
angular.module('app', ['ng-file-input']);
```

And you're done :)

## How to use

Create a file input and add the ng-model attribute to it
```html
<input type="file" ng-model="file">
```
"file" will be the selected [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object.

You can also use the `mutiple` attribute
```html
<input type="file" ng-model="files" multiple>
```
In this case, files will be an (native) array of Files.
