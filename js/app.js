angular.module('rate-my-school', [
    'ngResource',
    'ngRoute',
    'rate-my-school.factories',
    'rate-my-app.controllers',
])

    .config(function($routeProvider){

        $routeProvider
            .when('/', {
                templateUrl: 'templates/schoolDetail.html',
                controller: 'SchoolDetailsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
	
