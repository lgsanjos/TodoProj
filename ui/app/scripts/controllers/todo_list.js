'use strict';

angular.module('uiApp')
  .controller('TodoListCtrl', function () {

    this.myTodoLists =
       [
         { id: 1, public: true, desc: "Finish the todo prototype view"},
         { id: 2, public: true, desc: "Rename properly, the routes, controller and etc"},
         { id: 3, public: false, desc: "Design a list of todo list"} 
       ];

   this.myFavoritedTodoLists =
        [
         { id: 1, desc: "Finish the todo prototype view"},
         { id: 3, desc: "Design a list of todo list"} 
       ];

  });
