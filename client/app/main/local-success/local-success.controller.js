'use strict';

angular.module('jrnyApp').controller('localsuccessCtrl', function ($scope, $http, $location, $stateParams, Auth, Upload) {

	$scope.getCurrentUser = Auth.getCurrentUser;

});