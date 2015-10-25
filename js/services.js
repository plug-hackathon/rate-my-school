angular.module('rate-my-school.services', [])

    .service('SchoolsService', function (SchoolsFactory, $q) {
        return $q.all(_.range(7).map(function (offset) {
            return SchoolsFactory.query({skip: offset * 1000}).$promise
        })).then(function (ps) {
            return ps.map(function (x) {
                return x.results;
            }).reduce(function (a, x) {
                return a.concat(x);
            }, []);
        });
    });
