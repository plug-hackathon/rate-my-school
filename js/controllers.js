angular.module('rate-my-app.controllers', [])

    .controller('SchoolDetailsCtrl', function($scope, jsonService){
        $scope.schoole = jsonService.query()[0];
    });
