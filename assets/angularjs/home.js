'use strict';
/*global angular*/
angular.module('ovhhs.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: '/template/home',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [function() {

}]);