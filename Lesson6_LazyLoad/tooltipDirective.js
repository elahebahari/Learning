angular.module('myApp').directive('btTooltip',function($compile){
  return{
    restrict:'A',
    replace:'true',
    scope:{btTooltip:'@'},
    link:function(scope,elem,attrs){
      elem.attr("data-toggle","tooltip");
      elem.attr('data-placement',"bottom");
      var a="\""+attrs.btTooltip+"!!!"+"\"";
      elem.attr("title",a);
      $compile(elem)(scope);
    }
  }
});
