'use strict';

angular.module('uiApp')
  .factory('authenticationInterceptor', function($location, $window) {
    
    // TODO: Verify cookie for user recover as part of "remember me" feature
    return {
      request: function (config) {
        var url = $location.path();

        // TODO: Improve url filter
        var urlAllowed = url.indexOf('login') != -1;
        urlAllowed = urlAllowed || url.indexOf('signup') != -1;

        // XXX: Extract to service
        // XXX: Security concern
        var userSaved = Boolean($window.localStorage.getItem('userId'));

        if (!userSaved && !urlAllowed) {
          $location.path("/login");
        }

        return config;
      }
    };
  })
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('authenticationInterceptor');
  }]);
