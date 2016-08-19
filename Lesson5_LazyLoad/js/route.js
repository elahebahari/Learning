angular.module('App').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state( '/',{
      url:'/home',
      templateUrl:'./html/home.html',
      controller:'Ctrl',
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'App',
            files: [
             './js/navigationController.js',
             'StyleSheet.css'
            ]
          })
        }]
      }
    })
    .state('Dashboard',{
      url:"/Dashboard",
      controller:'dashboardController',
      templateUrl:"./html/Dashboard.html",
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'App',
            files: [
             './js/dashboardController.js',
            ]
          })
        }]
      }
    })
  .state('Blog',{
    url:"/Blog",
    controller:'blogController',
    templateUrl:"./html/Blog.html",
    resolve: {
      deps: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name: 'App',
          files: [
            './js/blogController.js',
          ]
        })
      }]
    }
  })
  .state('Profile',{
    url:"/Profile",
    controller:'profileController',
    templateUrl:"./html/Profile.html",
    resolve: {
      deps: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name: 'App',
          files: [
           './js/profileController.js',
          ]
        })
      }]
    }
  })
}]);
