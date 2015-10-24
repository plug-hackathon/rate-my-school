angular.module('rate-my-app.controllers', [])

    .controller('SchoolsCtrl', function($scope, SchoolsFactory){
        $scope.schools = SchoolsFactory.query();
    })

    .controller('SchoolDetailsCtrl', function($scope, $routeParams, SchoolDetailsFactory){
        $scope.school = SchoolDetailsFactory.query({id:$routeParams.id});

        $http.get('http://maps.google.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&sensor=false').success(function(mapData) {
            var data = angular.extend($scope, mapData);
            console.log(data);
        });


        uiGmapGoogleMapApi.then(function(maps) {
            $scope.map = {
                center: {
                    latitude: 56.8790044,
                    longitude: 14.8058522 },
                zoom: 16,
                options: {
                    scrollwheel: false,
                }
            }
        });

        $scope.marker = {
            id: 1,
            coords: {
                latitude: 56.8790044,
                longitude: 14.8058522
            }
        };
    });
