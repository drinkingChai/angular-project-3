angular.module('NoteWrangler')
  .controller('UsersShowController', function(Users, $scope, $routeParams) {
    $scope.user = Users.get({id: $routeParams.id});
  });
