'use strict';

angular.module('uiApp')
  .controller('TaskListCtrl', function ($routeParams, taskService) {

    this.todoListId = $routeParams.id;
    this.todoListData = taskService.retrieveTodoListDataGivenId(this.todoListId);

    this.todoListName = this.todoListData.name;
    this.todoListDescription = this.todoListData.desc;
    this.tasks = this.todoListData.tasks;

    this.newTaskDescription;

    this.addNewTask = function () {
      taskService.addNewTask(this.todoListId, this.newTaskDescription);
    }
    
  });
