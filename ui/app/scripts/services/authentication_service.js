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

    this.signup = function (user, password) {
      if ( this.login == '' || this.password == '') {
        this.showError =true;
        return;
      }

      return $http.post("http://localhost:3000/authentication/signup", { username: user, password: password});
    }

    this.signin = function (user, password) {
      return $http.post("http://localhost:3000/authentication/login", 
          { 'username': user,
            'password': password
          }).then(function (response) {

        return response.data.id;
      }.bind(this));
    };

  });
