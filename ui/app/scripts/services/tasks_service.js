'use strict';

angular.module('uiApp')
  .service('taskService', function ($http) {

    this.tasks = [
         { id: 1, checked: true, desc: "Finish the todo prototype view"},
         { id: 2, checked: true, desc: "Rename properly, the routes, controller and etc"},
         { id: 3, checked: true, desc: "Design a list of todo list"},
         { id: 4, checked: false, desc: "Refactor all the static data to services"} 
    ];

    this.myFavoriteTodoList = [
      { id: 1, name: '', desc: "Finish the todo prototype view"},
      { id: 3, name: '', desc: "Design a list of todo list"} 
    ];

    this.myTodoLists = [];

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
      var _this = this;
      $http.get('http://localhost:3000/tasks/todolist_given_user_id/' + id).then(function (response) {
        _this.myTodoLists = response.data;
      });
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
     
      // this.myTodoList.push(newTodo);
    };

    this.addNewTask = function (todoListId, taskDescription) {
      var newTask = { id: 5, checked: false};
      newTask.desc = taskDescription;

      this.tasks.push(newTask);
    };

  
});
