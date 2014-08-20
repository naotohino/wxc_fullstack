'use strict';

describe('Controller: SendmessageCtrl', function () {

  // load the controller's module
  beforeEach(module('wxcFullstackApp'));

  var SendmessageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SendmessageCtrl = $controller('SendmessageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
