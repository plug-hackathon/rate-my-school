angular.module('rate-my-school', [
    'ngResource',
    'ngRoute',
])

    .config(function($routeProvider){

        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
	
