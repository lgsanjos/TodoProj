'use strict';

angular.module('uiApp')
  .service('authenticationService', function () {

    this.authenticatedUser = null;

    this.isUserAuthenticated = function () {
      return this.authenticatedUser != null;
    }

  });


