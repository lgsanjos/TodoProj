'use strict';

angular.module('uiApp')
  .service('taskService', function ($http) {

    this.myFavoriteTodoList = [
      { id: 1, name: 'Gistia Test', description: "Finish the todo prototype view"},
      { id: 3, name: 'Another Todo', description: "This is a hardcoded list"} 
    ];

    this.retrieveAllTasksGivenTodoListId = function (id) {
      return $http.get('http://localhost:3000/tasks/given_todo_list_id/' + id);
    };

    this.retrieveTodoListGivenUserId = function (id) {
      return $http.get('http://localhost:3000/tasks/todolist_given_user_id/' + id);
    };

    this.retrieveFavoriteTodoListGivenUserId = function (id) {
      return this.myFavoriteTodoList;
    };

    this.toggleTaskCheck = function (taskId) {
      return $http.put('http://localhost:3000/tasks/toggle', { id:  taskId } );
    };

    this.newTodoList = function (userId, name, desc, isPublic) {
      return $http.post('http://localhost:3000/todolist/add', { 
          owner_id: userId,
          description: desc,
          name: name,
          isPublic: isPublic
          });
    };

    this.addNewTask = function (todoListId, taskDescription) {
      return $http.post('http://localhost:3000/tasks/add', { todo_list_id: todoListId, task: taskDescription});
    };

  
});
