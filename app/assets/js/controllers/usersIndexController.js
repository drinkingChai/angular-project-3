angular.module('NoteWrangler')
  .controller('UsersIndexController', function(Users, $scope) {
    $scope.users = Users.query();
  });
