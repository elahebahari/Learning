var app=angular.module('myApp',[]);
app.controller('myCtrl', function($scope){
  $scope.hidespan=function(){
    if($scope.TYPED_NAME== "" || $scope.TYPED_NAME==undefined)
      return true;
    else
      return false;
};
});

