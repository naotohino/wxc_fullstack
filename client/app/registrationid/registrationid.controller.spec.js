'use strict';

describe('Controller: RegistrationidCtrl', function () {

  // load the controller's module
  beforeEach(module('wxcFullstackApp'));

  var RegistrationidCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistrationidCtrl = $controller('RegistrationidCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
