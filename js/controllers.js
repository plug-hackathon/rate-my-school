angular.module('rate-my-school.controllers', [])

    .controller('SchoolsCtrl', function($scope, schools){
        $scope.schools = schools;
        console.log($scope.schools);
    })

    .controller('SchoolDetailsCtrl', function($scope, $routeParams, schools, RatingFactory){

        schools.forEach(function (school) {
            if (school.objectId === $routeParams.id) {
                $scope.school = school;
                return;
            }
        });

        Parse.initialize("3OWEYftfHGwWpvZ612fvlcxHef9ilMcNQhdgAJdj", "ScisaMB6uGwqLjesSyUlTYZfBnOkqyv69Uhveiss");

        function statusChangeCallback(response) {
            if (response.status === 'connected') {
                sendRatings()
                //console.log('sent ratings');
            } else {
            Parse.FacebookUtils.logIn(null, {
                success: function(user) {
		    sendRatings();
                },
                error: function(user, error) {
                    console.log("User cancelled the Facebook login or did not fully authorize.");
                }
            });
            }
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
	
	    $scope.authenticate = function() {
	        //	    checkLoginState();
	        FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
	    };

	    function sendRatings() {
	        console.log('trying to send rating.......');            
            rating = new RatingFactory();
            rating.schoolId = $scope.school.objectId;
            rating.teachersRate = $scope.teachersRate;
            rating.environmentRate = $scope.environmentRate;
            rating.facilitiesRate = $scope.facilitiesRate;
            rating.foodRate = $scope.foodRate;
            rating.commentText = $scope.commentText;
            console.log(rating);
            rating.$save();
	        console.log('sending done.');            
            
	    // TODO: Post the data collected from the view
            // $scope.teachersRate = 5;
            // $scope.environmentRate = 5;
            // $scope.facilitiesRate = 5;
            // $scope.foodRate = 5;
            // $scope.commentText;
	}
	
    });
