// Generated by CoffeeScript 1.10.0
(function() {
  app.controller('forgotController', function($scope, postService, $state, authenticateService, $location) {
    $scope.posts = postService.getPosts();
  });

}).call(this);
