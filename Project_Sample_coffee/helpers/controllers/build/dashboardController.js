// Generated by CoffeeScript 1.10.0
(function() {
  angular.module('myApp').controller('dashboardController', function($scope, postService, $stateParams, authenticateService, $location) {
    var i, posts, role;
    $scope.showchangePass = false;
    role = $stateParams.role;
    if (role === 'superAdmin') {
      $scope.showchangePass = true;
    }
    posts = postService.getPosts();
    $scope.selectedPost = {};
    i = 0;
    while (i < posts.length) {
      if (posts[i].id === $stateParams.id) {
        $scope.selectedPost = posts[i];
      }
      i++;
    }
    $scope.showCommentInsertionPart = true;
    $scope.showNoCommentInsertionPart = false;
    $scope.showCommentsPart = true;
    $scope.showNoCommentsPart = false;
    $scope.displayCommentInsertion = function() {
      $scope.$watch(authenticateService.isLogged, function(value, oldValue) {
        if (!value && oldValue || !value) {
          $location.path('login');
        }
        if (value) {
          if ($('#insertComment').hasClass('noDisplay')) {
            $('#insertComment').addClass('display');
            $('#insertComment').removeClass('noDisplay');
            $scope.showCommentInsertionPart = false;
            $scope.showNoCommentInsertionPart = true;
          } else {
            $('#insertComment').addClass('noDisplay');
            $('#insertComment').removeClass('display');
            $scope.showCommentInsertionPart = true;
            $scope.showNoCommentInsertionPart = false;
          }
        }
      });
    };
    $scope.displayComments = function() {
      if ($('#commentsPart').hasClass('noDisplay')) {
        $('#commentsPart').addClass('display');
        $('#commentsPart').removeClass('noDisplay');
        $scope.showCommentsPart = false;
        $scope.showNoCommentsPart = true;
      } else {
        $('#commentsPart').addClass('noDisplay');
        $('#commentsPart').removeClass('display');
        $scope.showCommentsPart = true;
        $scope.showNoCommentsPart = false;
      }
    };
  });

}).call(this);