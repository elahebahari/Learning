angular.module("myApp").config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state( '/',{
      url:'/',
      templateUrl:'./html/PageA.html',
      controller:'controller',
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'myApp',
            files: [
              "./js/controller.js"
            ]
          })
        }]
      }
    })
    .state('PageB',{
      url: "/PageB/:myParentText",
      templateUrl : "./html/PageB.html",
      controller : 'bController',
     	resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'myApp',
            files: [
              "./js/bController.js",
            ]
          })
        }]
      }
    })
}]);
