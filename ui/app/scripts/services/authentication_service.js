'use strict';

angular.module('uiApp')
  .service('authenticationService', function () {

    this.authenticatedUser = null;

    this.isUserAuthenticated = function () {
      return this.authenticatedUser !== null;
    };

    this.signoff = function () {
      this.authenticatedUser = null;
    };

    this.signin = function (user, password) {
      if (user === 'gui' && password === '') {
        this.authenticatedUser = {};
        return true;
      }

      return false;
    };

  });
