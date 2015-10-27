'use strict';

angular.module('uiApp')
  .service('taskService', function () {

    this.tasks = [
         { id: 1, checked: true, desc: "Finish the todo prototype view"},
         { id: 2, checked: true, desc: "Rename properly, the routes, controller and etc"},
         { id: 3, checked: true, desc: "Design a list of todo list"},
         { id: 4, checked: false, desc: "Refactor all the static data to services"} 
    ];

    this.myTodoList = [
      { id: 1, public: true, name: '', desc: "Finish the todo prototype view"},
      { id: 2, public: true, name: '', desc: "Rename properly, the routes, controller and etc"},
      { id: 3, public: false, name: '', desc: "Design a list of todo list"} 
    ];

    this.myFavoriteTodoList = [
      { id: 1, name: '', desc: "Finish the todo prototype view"},
      { id: 3, name: '', desc: "Design a list of todo list"} 
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

    this.retrieveTodoListGivenUserId = function (id) {
      return this.myTodoList;
    };

    this.retrieveFavoriteTodoListGivenUserId = function (id) {
      return this.myFavoriteTodoList;
    };

    this.newTodoList = function (userId, name, desc, isPublic) {
      var newTodo = {};
      newTodo.id = 10;
      newTodo.public = isPublic;
      newTodo.name = name;
      newTodo.desc = desc;
     
      this.myTodoList.push(newTodo);
    };

    this.addNewTask = function (todoListId, taskDescription) {
      var newTask = { id: 5, checked: false};
      newTask.desc = taskDescription;

      this.tasks.push(newTask);
    };

  
});
