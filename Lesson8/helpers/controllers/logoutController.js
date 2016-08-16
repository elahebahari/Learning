angular.module('myApp').controller("logoutController",function($scope,$state,$location,authenticateService,sessionService){
  $scope.logout=function(){
    authenticateService.logout();
    $location.path('home');
  }
});
