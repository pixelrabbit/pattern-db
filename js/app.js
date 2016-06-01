var app = angular.module("patternDB", ["firebase"]);
var ref = new Firebase("//torrid-fire-7061.firebaseio.com");

// // three way binding
app.controller("patternBody", function($scope, $firebaseObject) {

    // download the data into a local object
    //var syncObject = $firebaseObject(ref);
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    //syncObject.$bindTo($scope, "data");

    
    
});
ref.authWithOAuthPopup("google", function(error, authData) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
        }
    });