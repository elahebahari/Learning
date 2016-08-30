app.controller 'forgotController', ($scope, postService, $state, authenticateService, $location) ->
  $scope.posts = postService.getPosts()
  return
