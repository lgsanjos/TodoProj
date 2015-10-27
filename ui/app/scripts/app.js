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
        controller: 'TodoListCtrl',
        controllerAs: 'ctrl'
      })
      .when('/tasks/:id', {
        templateUrl: 'views/task_list.html',
        controller: 'TaskListCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
