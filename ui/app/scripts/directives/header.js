'use strict';

angular.module('uiApp')
  .directive('myHeader', function () {
     return {
       restrict: 'E',
       replace: true,
       templateUrl: 'views/header.html'
     }
  });
