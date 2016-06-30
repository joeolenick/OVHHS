'use strict';
/*global angular*/
angular.module('ovhhs.OVHH', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/OVHH', {
    templateUrl: '/template/OVHH',
    controller: 'OVHHCtrl'
  });
}])

.controller('OVHHCtrl', [function() {

}]);