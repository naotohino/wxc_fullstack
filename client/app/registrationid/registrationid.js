'use strict';

angular.module('wxcFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('registrationid', {
        url: '/registrationid',
        templateUrl: 'app/registrationid/registrationid.html',
        controller: 'RegistrationidCtrl'
      });
  });