'use strict';

angular.module('uiApp')
  .factory('authenticationInterceptor', function($location) {
  // .factory('authenticationInterceptor', function(authenticationService, $location) {
    
    // TODO: Verify cookie for user recover as part of "remember me" feature
    return {
      request: function (config) {
        return config;
      }
    };
  })
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('authenticationInterceptor');
  }]);
