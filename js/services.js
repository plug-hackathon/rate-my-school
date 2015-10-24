angular.module('rate-my-school.services', [])

    .service('SchoolsService', function (SchoolsFactory){
        return SchoolsFactory.query().$promise
            .then(function (response){
                return response.results;
            });
    });

