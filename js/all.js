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
    var servicesState = {
        name: "services",
        url: "/services",
        templateUrl: "../services.html",
        controller: "servicesCtrl"
    };
    var productState = {
        name: "products",
        url: "/products",
        templateUrl: "../product.html",
        controller: "productCtrl"
    }
    $stateProvider.state(homeState);
    $stateProvider.state(contactState);
    $stateProvider.state(servicesState);
    $stateProvider.state(productState);
});