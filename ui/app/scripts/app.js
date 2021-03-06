'use strict';

angular
  .module('uiApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
 .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/todo_list.html',
        controller: 'TodoCtrl',
        controllerAs: 'ctrl'
      })
      .when('/tasks/:id', {
        templateUrl: 'views/task_list.html',
        controller: 'TaskCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
       .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'AuthenticationCtrl',
        controllerAs: 'ctrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthenticationCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
