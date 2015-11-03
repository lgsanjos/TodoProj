'use strict';

angular.module('uiApp')
  .controller('TodoCtrl', function (taskService, authenticationService, $window) {

    this.myTodoLists = [];
    this.myFavoritedTodoLists = taskService.retrieveFavoriteTodoListGivenUserId(1);

    this.taskName = '';
    this.taskDescription = '';
    this.taskPrivate = '';

    this.updateTodoLists = function () {
      // XXX: Extract to service
      // XXX:Improve security moving to cookies, expiration time and use hash instead id
      var userId = $window.localStorage.getItem('userId');

      taskService.retrieveTodoListGivenUserId(userId).then(function (response) {
        this.myTodoLists = response.data; 
      }.bind(this));
    };

    this.updateTodoLists();

    this.newTodoList = function () {
      // XXX: Extract to service
      // XXX:Improve security moving to cookies, expiration time and use hash instead id
      var userId = $window.localStorage.getItem('userId');

      taskService.newTodoList(userId, this.taskName, this.taskDescription, !this.taskPrivate).then(function () {
        this.updateTodoLists();
      }.bind(this));

      this.taskName = '';
      this.taskDescription = '';
      this.taskPrivate = false;
    };

  });
