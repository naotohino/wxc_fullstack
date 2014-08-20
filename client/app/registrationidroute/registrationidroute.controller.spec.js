'use strict';

describe('Controller: RegistrationidrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('wxcFullstackApp'));

  var RegistrationidrouteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistrationidrouteCtrl = $controller('RegistrationidrouteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
