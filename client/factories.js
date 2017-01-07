angular.module('FSJones.factories', ['ngResource'])

.factory('Contact', ['$resource', function($resource) {
    return $resource('/api/contact/:id')
}]);