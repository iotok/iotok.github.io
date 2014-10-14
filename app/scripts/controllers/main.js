'use strict';

/**
 * @ngdoc function
 * @name iotokApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iotokApp
 */
angular.module('iotokApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
