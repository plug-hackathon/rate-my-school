angular.module('rate-my-school', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'rate-my-school.factories',
    'rate-my-app.controllers'
])

    .config(function($routeProvider){

        $routeProvider
            .when('/', {
                templateUrl: 'templates/school/list.html',
                controller: 'SchoolsCtrl'
            })
            .when('/skola/:id', {
                templateUrl: 'templates/school/details.html',
                controller: 'SchoolDetailsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
	
