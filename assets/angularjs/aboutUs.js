'use strict';
/*global angular*/
angular.module('ovhhs.aboutUs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aboutUs', {
    templateUrl: '/template/aboutUs',
    controller: 'aboutUsCtrl'
  });
}])

.controller('aboutUsCtrl', [function() {

}]);