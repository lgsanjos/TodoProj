'use strict';

angular.module('uiApp')
  .controller('AuthenticationCtrl', function ($scope, authenticationService, $location) {
 
    this.login = '';
    this.password = '';

    this.showError = false;

    this.signin = function () {
      var _this = this;

      authenticationService.signin(this.login, this.password).then(function () {
        $location.path("/");
      }, function () {
        // TODO: Display error message on a dialog 
        _this.showError = true;

        setTimeout(function () {
          _this.showError = false;
          $scope.$apply();
        }, 3000);
      });
    };

    this.signup = function () {
    };

  });
