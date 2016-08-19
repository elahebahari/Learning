angular.module("myApp").controller("bController",function($scope, $stateParams){
	$scope.MyhText = $stateParams.myParentText;
});
