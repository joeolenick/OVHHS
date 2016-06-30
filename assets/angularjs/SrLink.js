'use strict';
/*global angular*/
angular.module('ovhhs.SrLink', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SrLink', {
    templateUrl: '/views/SrLink/SrLink.tpl.html',
    controller: 'SrLinkCtrl'
  });
}])

.controller('SrLinkCtrl', [function() {

}]);