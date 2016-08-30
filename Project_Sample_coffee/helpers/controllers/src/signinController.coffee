angular.module('myApp').controller 'signinController', ($scope, $state, $location, authenticateService, sessionService) ->
  $scope.show_error = false

  $scope.signin = ->
    user = {}
    if $scope.emailModel == 'admin'
      user.email = $scope.emailModel
      user.pass = $scope.passModel
      authenticateService.login user
      $location.path 'dashboard/admin'
    else if $scope.emailModel == 'superAdmin'
      user.email = $scope.emailModel
      user.pass = $scope.passModel
      authenticateService.login user
      $location.path 'dashboard/superAdmin'
    else
      $scope.show_error = true
    return

  $scope.signUp = ->
    $location.path 'signUp'
    return

  $scope.forgot = ->
    $location.path 'forgot'
    return

  return

# ---
# generated by js2coffee 2.2.0
