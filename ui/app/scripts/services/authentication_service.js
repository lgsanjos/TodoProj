'use strict';

angular.module('uiApp')
  .service('authenticationService', function ($http) {

    this.authenticatedUser = null;

    this.isUserAuthenticated = function () {
      return this.authenticatedUser !== null;
    };

    this.signoff = function () {
      this.authenticatedUser = null;
    };

    this.signin = function (user, password) {
      return $http.post("http://localhost:3000/authentication/login", 
          { 'username': user,
            'password': password
          });
    };

  });
