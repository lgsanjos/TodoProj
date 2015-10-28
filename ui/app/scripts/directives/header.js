'use strict';

angular.module('uiApp')
  .directive('myHeader', function () {
     return {
       restrict: 'E',
       replace: true,
       templateUrl: 'views/header.html',
       controller: function ($scope, authenticationService, $location) {
         $scope.isAuthenticated = function () {
           return authenticationService.isUserAuthenticated();
         };

         $scope.signoff = function () {
           authenticationService.signoff();
           $location.path("#/login");
         }
       }
     }
  });
