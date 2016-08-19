
angular.module("myApp").controller("myCtrl",function($scope){
  $scope.submitClick=function(){
    if($scope.userInfo.$invlid==true) alert('some Invlid Information');
  }
  $scope.isfavoritesSelected=function(object){
    var Checked=false;
    angular.forEach(object,function(value,key){if(value.checked)Checked=true;});
    return Checked;
  }
  $scope.country=[{Id:1,name:"Iran"},{Id:2,name:"Turkey"},{Id:3,name:"Russia"},{Id:4,name:"China"}];
  $scope.favorites=[{value:1,label:"flight"},{value:2,label:"hotel"},{value:3,label:"price"}]
  $scope.gender=[{Id:"M",Text:"Male"},{Id:"F",Text:"Female"},{Id:"O",Text:"Other"}];
  $scope.favoriteSelected=function(position,favorites){
    angular.forEach(favorites,function(item,index){if(position!=index) item.checked=false;});
  }
});
