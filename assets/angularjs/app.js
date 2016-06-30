'use strict';
/*global angular*/
// Declare app level module which depends on views, and components
angular.module('ovhhs', [
  'ngRoute',
  'ovhhs.home',
  'ovhhs.aboutUs',
  'ovhhs.OVHH',
  'ovhhs.OVHC',
  'ovhhs.SrLink'
])


.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider.otherwise({redirectTo: 'home'});
}]);

