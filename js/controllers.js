angular.module('rate-my-app.controllers', [])

    .controller('SchoolsCtrl', function($scope, SchoolsFactory){
        $scope.schools = SchoolsFactory.query();
    })

    .controller('SchoolDetailsCtrl', function($scope, $routeParams, SchoolDetailsFactory){
        $scope.school = SchoolDetailsFactory.query({id:$routeParams.id});

        $scope.maxRate = 10;

        $scope.teacherAverage = 5;
        $scope.environmentAverage = 5;
        $scope.facilitiesAverage = 5;
        $scope.foodAverage = 5;

        $scope.teachersRate = 5;
        $scope.environmentRate = 5;
        $scope.facilitiesRate = 5;
        $scope.foodRate = 5;

    });
