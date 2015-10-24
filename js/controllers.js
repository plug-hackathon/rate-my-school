angular.module('rate-my-app.controllers', [])

    .controller('ListCtrl', function($scope, jsonService){
        $scope.list = jsonService.query();
    });
