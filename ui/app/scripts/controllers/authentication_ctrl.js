'use strict';

angular.module('uiApp')
  .controller('AuthenticationCtrl', function (authenticationService, $location) {
 
    this.login;
    this.password;

    this.signin = function () {
      var auth = authenticationService.signin(this.login, this.password);
      if (auth) 
        $location.path("/");
    }

    this.signup = function () {
    }

  });
