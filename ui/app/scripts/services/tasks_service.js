'use strict';

angular.module('uiApp')
  .service('taskService', function () {

    this.tasks = [
         { id: 1, checked: true, desc: "Finish the todo prototype view"},
         { id: 2, checked: true, desc: "Rename properly, the routes, controller and etc"},
         { id: 3, checked: true, desc: "Design a list of todo list"},
         { id: 4, checked: false, desc: "Refactor all the static data to services"} 
      ];

    this.retrieveTodoListDataGivenId = function (id) {
      var todoList = {
        name: 'Naaame!!',
        desc: 'My todo description',
      };

      todoList.id = id;
      todoList.tasks = this.tasks;
      return todoList;
    };

    this.addNewTask = function (todoListId, taskDescription) {
      var newTask = { id: 5, checked: false};
      newTask.desc = taskDescription;

      this.tasks.push(newTask);
    };
  
});
