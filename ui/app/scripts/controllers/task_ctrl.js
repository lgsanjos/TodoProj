'use strict';

angular.module('uiApp')
  .controller('TaskCtrl', function ($scope, $routeParams, taskService) {

    this.todoListId = $routeParams.id;
    this.tasks = [];

    this.retrieveAllTasks = function (id) {
      taskService.retrieveAllTasksGivenTodoListId(this.todoListId).then(function (response) {
        this.tasks = response.data.tasks;
        this.todoListName = response.data.name;
        this.todoListDescription = response.data.description;
      }.bind(this));
    }

    this.retrieveAllTasks(this.todoListId);

    this.toggleTask = function (id) {
      taskService.toggleTaskCheck(id);
    }

    this.addNewTask = function () {
      taskService.addNewTask(this.todoListId, this.newTaskDescription).then(function () {
        this.retrieveAllTasks(this.todoListId);
        this.newTaskDescription = '';
      }.bind(this));
    };
    
  });
