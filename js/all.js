var app = angular.module("myApp", ['ui.router']);
app.config(function($stateProvider) {
    var homeState = {
        name: "home",
        url: "/home",
        templateUrl: "../home.html",
        controller: "homeCtrl"
    };
    $stateProvider.state(homeState);
});