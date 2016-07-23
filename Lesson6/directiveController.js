var app=angular.module('myApp',[]);
app.directive('businessHeading',function(){return{restrict:'AE',replace:'true',	template:'<div><h1>Business Page</h1></div>'}});
app.directive('btTooltip',function($compile){return{restrict:'A',replace:'true',scope:{btTooltip:'@'},link:function(scope,elem,attrs){elem.attr("data-toggle","tooltip");
elem.attr('data-placement',"bottom");
var a="\""+attrs.btTooltip+"!!!"+"\"";
elem.attr("title",a);
$compile(elem)(scope);
}}});
app.controller('myCtrl',function($scope){$scope.users=[{fullName:'Saaeed Alidadi',age:'25',number:1},{fullName:'Kasra Kasaee',age:'22',number:2},{fullName:'mojtaba ghavidel',age:'25',number:3}];});

