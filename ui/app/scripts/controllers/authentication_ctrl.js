'use strict';

angular.module('uiApp')
  .controller('AuthenticationCtrl', function ($scope, authenticationService, $window, $location) {
 
    this.login = '';
    this.password = '';

    this.showError = false;

    this.signin = function () {
      authenticationService.signin(this.login, this.password).then(function (userId) {
        // XXX: Extract to service
        // XXX: Improve security moving to cookies, expiration time and use hash instead id
        $window.localStorage.setItem('userId', userId);
        $location.path("/");
      }, function () {
        this.showError = true;

        setTimeout(function () {
          this.showError = false;
          $scope.$apply();
        }.bind(this), 3000);
      }.bind(this));
    };

    this.signup = function () {
      authenticationService.signup(this.login, this.password).then(function () {
        this.signin();
      }.bind(this), function () {
        this.showError = true;
        $scope.$apply();
      }.bind(this));
    };

  });
