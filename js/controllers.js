angular.module('rate-my-school.controllers', [])

    .controller('SchoolsCtrl', function($scope, schools){
        $scope.schools = schools;
        $scope.filterSchools = '';
    })

    .controller('SchoolDetailsCtrl', function($scope, $routeParams, schools){

        schools.forEach(function (school) {
            if (school.objectId === $routeParams.id) {
                $scope.school = school;
                return;
            }
        });

        Parse.initialize("3OWEYftfHGwWpvZ612fvlcxHef9ilMcNQhdgAJdj", "ScisaMB6uGwqLjesSyUlTYZfBnOkqyv69Uhveiss");
	var Rating = Parse.Object.extend("ratings");
	
        function statusChangeCallback(response) {
            if (response.status === 'connected') {
                sendRatings();
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
	var x = 0;
	var query = new Parse.Query(Rating);
	query.equalTo("schoolId", $scope.school.objectId);
	query.find({
	    success: function(results) {
		$scope.ratingsQuantity = results.length;
		for (var i = 0; i < results.length; i++) {
		    var object = results[i];
		    console.log(object.id + ' - ' + object.get('commentText'));
		    x += 1;
		}
	    },
	    error: function(error) {
		alert("Error: " + error.code + " " + error.message);
	    }
	});

	console.log(x);
	console.log($scope.ratingsQuantity + " quantity");
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
	        FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
	    };

	    function sendRatings() {
	        console.log('trying to send rating.......');            
		var rating = new Rating();

		rating.set("schoolId", $scope.school.objectId);
		rating.set("teachersRate", $scope.teachersRate);
		rating.set("environmentRate", $scope.environmentRate);
		rating.set("facilitiesRate", $scope.facilitiesRate);
		rating.set("foodRate", $scope.foodRate);
		rating.set("commentText", $scope.commentText);
		
		console.log(rating);
		rating.save(null, {
		    success: function(rating) {
			alert('New object created with objectId: ' + rating.id);
		    },
		    error: function(rating, error) {
			alert('Failed to create new object, with error code: ' + error.message);
		    }
		});
		location.reload();
	    }
    });
