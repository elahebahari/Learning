angular.module('myApp').directive('businessHeading',function(){
  return{
    restrict:'AE',
    replace:'true',
    template:'<div><h1>Business Page</h1></div>'
  }
});
