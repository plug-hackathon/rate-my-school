angular.module('rate-my-app.controllers', [])

    .controller('SchoolsCtrl', function($scope, SchoolsFactory){
        $scope.schools = SchoolsFactory.query();
    })

    .controller('SchoolDetailsCtrl', function($scope, $routeParams, SchoolDetailsFactory){
        $scope.school = SchoolDetailsFactory.query({id:$routeParams.id});
        $scope.rate = 5;
        $scope.max = 5;
        $scope.isReadonly = false;
    });
