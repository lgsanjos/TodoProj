'use strict'

describe('TaskServices', function () {

  var taskService, httpbackend;

  beforeEach(function () {
    module('uiApp');

    inject(function ($injector, $httpBackend) {
      httpbackend = $httpBackend;
      taskService = $injector.get('taskService');
    });

    expect(taskService).toBeDefined();
  });
 
  afterEach (function () {
    httpbackend.verifyNoOutstandingRequest ();
  });

  it('should retrieve all tasks given user id', function (done) {
    var myTodoList = [
      { id: 1, public: true, name: '', desc: "Finish the todo prototype view"},
      { id: 2, public: true, name: '', desc: "Rename properly, the routes, controller and etc"},
      { id: 3, public: false, name: '', desc: "Design a list of todo list"} 
    ];

    httpbackend.whenGET('http://localhost:3000/tasks/givenuserid/1').respond(myTodoList);
    taskService.retrieveTodoListGivenUserId(1).then(function (todoList) {
      expect(todoList.data).toEqual(myTodoList);
      done();
    });

    httpbackend.flush();
  });

});
