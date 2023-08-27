//routing
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.htm"
    })
    .when("/services", {
        templateUrl : "services.htm"
    })
    .when("/contact", {
        templateUrl : "contact.htm"
    })
    .when("/about", {
        templateUrl : "about.htm"
    })
    .when("/talk", {
        templateUrl : "talk.htm"
    });
});

//page content control
app.controller("IndexController", function($scope) {
    $scope.isIndexPage = true;
});
