angular.module('myApp').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state( '/',{
      url:'/',
      templateUrl:'directives.html',
      controller:'myCtrl',
      requireAuth: false,
    	resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'myApp',
            files: [
              "directiveController.js",
			        'businessDirective.js',
		        	'tooltipDirective.js',
		        	'styleSheet.css' 
            ]
          })
        }]
      }
    });
}]);

