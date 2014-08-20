'use strict';

angular.module('wxcFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sendmessage', {
        url: '/sendmessage',
        templateUrl: 'app/sendmessage/sendmessage.html',
        controller: 'SendmessageCtrl'
      });
  });