angular.module('rate-my-app.controllers', [])

    .controller('SchoolDetailsCtrl', function($scope, jsonService){
        $scope.school = jsonService.query();
    });
