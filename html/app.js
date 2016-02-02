// three way binding
var app = angular.module("sampleApp", ["firebase"]);
app.controller("patternBody", function($scope, $firebaseObject) {
  var ref = new Firebase("//torrid-fire-7061.firebaseio.com/data");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
});