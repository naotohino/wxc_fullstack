'use strict';

angular.module('wxcFullstackApp')
  .controller('RegistrationidCtrl', function ($scope, Auth, $http) {
    $scope.message = 'Hello';

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;
    //$scope.send_data = {};

  

   var postUrl ="/api/users/" + Auth.getCurrentUser()._id + "/registrationid";

    console.log("Auth.getCurrentUser()._id ="+Auth.getCurrentUser()._id);

	var query = {};
    	query.method = "POST";
    	query.url = postUrl;
    	var json = window.JSON.stringify(query);
    	console.log(window.JSON.stringify(query));


   $scope.sendRegistrationId = function(){
    	console.log("postUrl ="+postUrl);
    	console.log("sendid="+$scope.registration_id);
    	//console.log("scope"+window.JSON.stringify($scope));

    	var body = {};
    	body.registration_id = $scope.registration_id;
    	body.dummy = "dummy";
    	console.log("body:"+window.JSON.stringify(body));
    	
    	$http({
    		method : 'POST',
    		url : postUrl,
    		headers : {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
    		data : body,
    		params : body
    		//transformRequest : null
    	}).
  			success(function(data, status, headers, config) {
  				console.log("success");
  		}).
  		error(function(data, status, headers, config) {
  				console.log("error");
  		});
    }


  });
