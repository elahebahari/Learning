app.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state( 'login',{
      url:'/login',
      templateUrl:'/views/login',
      controller:'loginController',
      requireAuth: false,
     	resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'myApp',
            files: [
              "helpers/controllers/loginController.js"
			      ]})
         }]
       }
    })
    .state('home',{
      url:'/home',
      templateUrl:'/views/home',
      controller:'homeController',
      requireAuth: false,
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'myApp',
            files: [
              "helpers/controllers/homeController.js",
              "helpers/services/postService.js"
            ]})
        }]
      }
    })
    .state('logout',{
      url:'/logout',
      templateUrl:'/views/logout',
      controller:'logoutController',
      requireAuth: true,
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'myApp',
            files: [
              "helpers/controllers/logoutController.js"
			      ]
          })
        }]
      }
    })
    .state('post',{
      url:'/post/:id',
      templateUrl:'/views/post',
      controller:'postController',
      requireAuth: true,
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'myApp',
            files: [
              "helpers/controllers/postController.js"
			      ]
          })
        }]
      }
    });
}]);
