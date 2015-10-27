'use strict';

angular.module('uiApp')
  .factory('authenticationInterceptor', function(authenticationService, $location) {
    
    // TODO: Verify cookie for user recover as part of "remember me" feature
    return {
      request: function (config) {
        if (!authenticationService.isUserAuthenticated())
          $location.path('/login');

        return config;
      };

    };
  })
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('authenticationInterceptor');
  }]);
