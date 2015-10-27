'use strict';

angular.module('uiApp')
  .controller('TodoCtrl', function (taskService) {

    this.myTodoLists = taskService.retrieveTodoListGivenUserId(1);
    this.myFavoritedTodoLists = taskService.retrieveFavoriteTodoListGivenUserId(1);

    this.taskName;
    this.taskDescription;
    this.taskPrivate;

    this.newTodoList = function () {
      var userId = 1;
      taskService.newTodoList(userId, this.taskName, this.taskDescription, !this.taskPrivate);

      this.taskName = '';
      this.taskDescription = '';
      this.taskPrivate = false;
    }

  });
