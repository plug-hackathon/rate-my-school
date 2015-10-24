angular.module('rate-my-school', [
    'ngResource',
    'ngRoute',
    'rate-my-school.factories',
    'rate-my-app.controllers',
    'ui.bootstrap'
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
	
