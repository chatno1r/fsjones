angular.module("FSJones", ["ngRoute", "ngResource", "FSJones.controllers", "FSJones.factories", "FSJones.services"])

.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

    .when("/", {
        templateUrl: "views/welcome.html",
        controller: "WecomeController"
    })
    .when("/team", {
        templateUrl: "views/team.html"
    })
    .when("/services", {
        templateUrl: "views/services.html"
    })
    .when("/forms", {
        templateUrl: "views/forms.html",
        controller: "FormsController"
    })
    .when("/refinanceform", {
        templateUrl: "views/refinanceform.html",
        controller: "FormsController"
    })
    .when("/purchaseform", {
        templateUrl: "views/purchaseform.html",
        controller: "FormsController"
    })
    .when("/contact", {
        templateUrl: "views/contact.html",
        controller: "ContactController"
    })
    .when("/glossary", {
        templateUrl: "views/glossary.html"
    })
    .otherwise({
        redirectTo: "/"
    });
}]);

//seo services