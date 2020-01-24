var app = angular.module("myApp", ['ui.router']);
app.config(function($stateProvider) {
    var homeState = {
        name: "home",
        url: "/home",
        templateUrl: "../home.html",
        controller: "homeCtrl"
    };
    var contactState = {
        name: "contact",
        url: "/contact",
        templateUrl: "../contact.html",
        controller: "contactCtrl"
    };
    $stateProvider.state(homeState);
    $stateProvider.state(contactState);
});