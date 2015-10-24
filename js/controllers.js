angular.module('rate-my-app.controllers', [])

    .controller('SchoolsCtrl', function($scope, jsonService){
        $scope.schools = jsonService.query();
        console.log($scope.schools);
    })

    .controller('SchoolDetailsCtrl', function($scope, jsonService){
        $scope.school = jsonService.query();
    });
