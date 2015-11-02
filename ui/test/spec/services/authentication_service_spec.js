'use strict'

describe('AuthenticationService', function () {

  var authenticationService, httpbackend;

  beforeEach(function () {
    module('uiApp');

    inject(function ($injector, $httpBackend) {
      httpbackend = $httpBackend;
      authenticationService = $injector.get('authenticationService');
    });

    expect(authenticationService).toBeDefined();
  });
  
  afterEach (function () {
    httpbackend.verifyNoOutstandingExpectation ();
    httpbackend.verifyNoOutstandingRequest ();
  });

  it('should call backend service and bypass arguments', function () {
    httpbackend.whenPOST('http://localhost:3000/authentication/login').respond({ id: 1, username: 'user' });

    authenticationService.signin('username', 'pass');
    httpbackend.flush();
  });

});
