
angular.module('rate-my-school.factories', ['ngResource'])

    .factory('SchoolsFactory', function($resource) {
        return $resource('https://api.parse.com/1/classes/schools2', {limit: 1000, skip: "@skip"}, {
            query: {
                method: 'GET',
                isArray: false,
                headers: {
                    'X-Parse-Application-Id': '3OWEYftfHGwWpvZ612fvlcxHef9ilMcNQhdgAJdj',
                    'X-Parse-REST-API-Key': 'MBxmR1PkYj3dise2KBCozWPaUd9ZUAyAZhw6wFME'
                }
            }
        });
    })

    .factory('SchoolDetailsFactory', function($resource) {
        return $resource('js/data/school/:id.json', {}, {
            query: { method: "GET", isArray: false }
            
        });
    })

    .factory('RatingFactory', function($resource) {
        return $resource('https://api.parse.com/1/classes/ratings', {}, {
            query: { method: "GET",
                     isArray: false,
                     headers: {
                         'X-Parse-Application-Id': '3OWEYftfHGwWpvZ612fvlcxHef9ilMcNQhdgAJdj',
                         'X-Parse-REST-API-Key': 'MBxmR1PkYj3dise2KBCozWPaUd9ZUAyAZhw6wFME'
                     }
                   },
            save: { method: "POST",
                     headers: {
                         'X-Parse-Application-Id': '3OWEYftfHGwWpvZ612fvlcxHef9ilMcNQhdgAJdj',
                         'X-Parse-REST-API-Key': 'MBxmR1PkYj3dise2KBCozWPaUd9ZUAyAZhw6wFME'
                     }
                   }
            
        });
    });
