angular.module("myApp").controller("controller",function($scope,$state){
  $scope.GoToPageB=function(){
	  if($scope.myText==undefined || $scope.myText=='')
		  {alert("The TextBox Is Empty");}
		else
		  $state.go('PageB',{myParentText:$scope.myText});}
});
