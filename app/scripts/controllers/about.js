'use strict';

/**
 * @ngdoc function
 * @name iotokApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the iotokApp
 */
angular.module('iotokApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
