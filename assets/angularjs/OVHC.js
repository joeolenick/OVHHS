'use strict';
/*global angular*/
angular.module('ovhhs.OVHC', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/OVHC', {
    templateUrl: '/views/OVHC/OVHC.tpl.html',
    controller: 'OVHCCtrl'
  });
}])

.controller('OVHCCtrl', [function() {

}]);