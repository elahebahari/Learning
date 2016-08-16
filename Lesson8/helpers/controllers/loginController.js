angular.module('myApp').controller("loginController",function($scope,$state,$location,authenticateService,sessionService){
  $scope.login=function(){
    if($scope.emailModel=='geek' && $scope.passModel=='password'){
      authenticateService.login($scope.emailModel);
      $location.path('home');
    }
  }
});
