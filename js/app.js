angular.module('rate-my-school', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'rate-my-school.factories',
    'rate-my-school.controllers',
    'rate-my-school.services',
])

    .config(function($routeProvider){

        $routeProvider
            .when('/', {
                templateUrl: 'templates/school/list.html',
                controller: 'SchoolsCtrl',
                resolve: {
                    schools: function (SchoolsService) { return SchoolsService; }
                }
            })
            .when('/skola/:id', {
                templateUrl: 'templates/school/details.html',
                controller: 'SchoolDetailsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
	
