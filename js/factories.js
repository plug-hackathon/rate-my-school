
angular.module('rate-my-school.factories', ['ngResource'])

    .factory('SchoolsFactory', function($resource) {
        return $resource('js/data/schools.json');
    })

    .factory('SchoolDetailsFactory', function($resource) {
        return $resource('js/data/school/:id.json');
    });
