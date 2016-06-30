'use strict';
/*global angular*/
angular.module('ovhhs.OVHH', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/OVHH', {
    templateUrl: '/views/ovhh/ovhhs.tpl.html',
    controller: 'OVHHCtrl'
  });
}])

.controller('OVHHCtrl', [function() {

}]);