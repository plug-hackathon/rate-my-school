angular.module('rate-my-school', [
    'ngResource',
    'ngRoute',
    'rate-my-school.factories',
    'rate-my-app.controllers',
])

    .config(function($routeProvider){

        $routeProvider
            .when('/', {
                templateUrl: 'templates/school/details.html',
                controller: 'SchoolDetailsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
	
