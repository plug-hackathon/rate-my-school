angular.module('rate-my-school.controllers', [])

    .controller('SchoolsCtrl', function($scope, schools){
        $scope.schools = schools;
        console.log($scope.schools);
    })

    .controller('SchoolDetailsCtrl', function($scope, $routeParams, SchoolDetailsFactory){
        $scope.school = SchoolDetailsFactory.query({id:$routeParams.id});
	Parse.initialize("3OWEYftfHGwWpvZ612fvlcxHef9ilMcNQhdgAJdj", "ScisaMB6uGwqLjesSyUlTYZfBnOkqyv69Uhveiss");
	
        $scope.maxRate = 10;

        $scope.teacherAverage = 5;
        $scope.environmentAverage = 5;
        $scope.facilitiesAverage = 5;
        $scope.foodAverage = 5;

        $scope.teachersRate = 5;
        $scope.environmentRate = 5;
        $scope.facilitiesRate = 5;
        $scope.foodRate = 5;

	var testParse = function() {
	    console.log('yey');
        };
    });
