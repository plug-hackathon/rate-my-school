angular.module('rate-my-school', [
    'ngResource',
    'ngRoute',
    'rate-my-school.factories',
    'rate-my-app.controllers',
    'uiGmapgoogle-maps',
])

    .config(function($routeProvider, uiGmapGoogleMapApiProvider){

        uiGmapGoogleMapApiProvider.configure({
            key: ' AIzaSyANQHq1H7KEA4pHdUksqdJyVdTCT1AnrDg ',
            v: '3.17',
            libraries: 'weather,geometry,visualization',
        });
        
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
	
