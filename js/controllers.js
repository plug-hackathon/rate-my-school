angular.module('rate-my-school.controllers', [])

    .controller('SchoolsCtrl', function($scope, schools){
        $scope.schools = schools;
        console.log($scope.schools);
    })

    .controller('SchoolDetailsCtrl', function($scope, $routeParams, schools){

        schools.forEach(function (school) {
            if (school.objectId === $routeParams.id) {
                $scope.school = school;
                return;
            }
        });

        Parse.initialize("3OWEYftfHGwWpvZ612fvlcxHef9ilMcNQhdgAJdj", "ScisaMB6uGwqLjesSyUlTYZfBnOkqyv69Uhveiss");

        function statusChangeCallback(response) {
            if (response.status === 'connected') {
            console.log('sent ratings');
            } else {
            Parse.FacebookUtils.logIn(null, {
                success: function(user) {
                if (!user.existed()) {
                    alert("User signed up and logged in through Facebook!");
                    console.log('sent ratings');
                } else {
                    alert("User logged in through Facebook!");
                    console.log('sent ratings');
                }
                },
                error: function(user, error) {
                console.log("User cancelled the Facebook login or did not fully authorize.");
                }
            });
            }
        }

        function checkLoginState() {
            FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
            });
        }
	
        window.fbAsyncInit = function() {
            Parse.FacebookUtils.init({
            appId      : '465399856995721',
            xfbml      : true,
            version    : 'v2.5'
            });
        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
	
        $scope.maxRate = 10;

        $scope.teacherAverage = 5;
        $scope.environmentAverage = 5;
        $scope.facilitiesAverage = 5;
        $scope.foodAverage = 5;

        $scope.teachersRate = 5;
        $scope.environmentRate = 5;
        $scope.facilitiesRate = 5;
        $scope.foodRate = 5;

	$scope.commentText = "";
	
	$scope.sendRatings = function() {
	    // TODO: Post the data collected from the view
            // $scope.teachersRate = 5;
            // $scope.environmentRate = 5;
            // $scope.facilitiesRate = 5;
            // $scope.foodRate = 5;
            // $scope.commentText;
	    checkLoginState();
	};
    });
