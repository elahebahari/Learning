
angular.module("myApp").config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
$urlRouterProvider.otherwise('/');
  $stateProvider
    .state( '/',{
      url:'/',
      templateUrl:'./html/formValidation.html',
      controller:'myCtrl',
      requireAuth: false,
 	resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      name: 'myApp',
                      files: [
                       "./js/formValidationController.js",
			'styleSheet.css'
			
                        
                      ]
                  })
                }]
        }
    });
}]);

