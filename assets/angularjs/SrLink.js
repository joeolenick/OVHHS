'use strict';
/*global angular*/
angular.module('ovhhs.SrLink', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SrLink', {
    templateUrl: '/template/SrLink',
    controller: 'SrLinkCtrl'
  });
}])

.controller('SrLinkCtrl', [function() {

}]);