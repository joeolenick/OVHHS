'use strict';
/*global angular*/
angular.module('ovhhs.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
        templateUrl: '/views/home/home.tpl.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [function() {

}]);