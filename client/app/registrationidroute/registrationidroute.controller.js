'use strict';

angular.module('wxcFullstackApp')
  .controller('RegistrationidrouteCtrl', function ($scope, Auth) {
    console.log("RegistrationidrouteCtrl");
    $scope.message = 'Hello';

	$scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;

    var postUrl = ="/user/" + Auth.getCurrentUser()._id + "/registrationid";

    console.log("Auth.getCurrentUser()._id ="+Auth.getCurrentUser()._id);

    // $scope.sendRegistrationId = function(){
    // 	console.log("postUrl ="+postUrl);
    // 	var query.method = "POST";
    // 	query.url = postUrl;
    // 	$http(query).
  		// 	success(function(data, status, headers, config) {
  		// 		console.log("success");
  		// }).
  		// error(function(data, status, headers, config) {
  		// 		console.log("error");
  		// });
    // }
  });
