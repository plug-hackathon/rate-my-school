
angular.module('rate-my-school.factories', ['ngResource'])
    .factory('jsonService', function($resource) {
        return $resource('js/data/data.json');
    });
