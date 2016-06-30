'use strict';
/*global angular*/
angular.module('ovhhs.OVHC', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/OVHC', {
    templateUrl: '/template/OVHC',
    controller: 'OVHCCtrl'
  });
}])

.controller('OVHCCtrl', [function() {

}]);