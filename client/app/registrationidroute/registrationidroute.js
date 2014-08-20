'use strict';

angular.module('wxcFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('registrationidroute', {
        url: '/registrationidroute',
        templateUrl: 'app/registrationidroute/registrationidroute.html',
        controller: 'RegistrationidrouteCtrl'
      });
  });