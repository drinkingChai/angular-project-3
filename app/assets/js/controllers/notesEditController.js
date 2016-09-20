angular.module('NoteWrangler')
  .controller('NotesEditController', function(Notes, Categories, Users, $scope, $routeParams, $location) {
    $scope.note = Notes.get({id: $routeParams.id});
    $scope.isSubmitting = false;
    $scope.categories = Categories.query();
    $scope.users = Users.query();

    $scope.saveNote = function(note) {
      $scope.isSubmitting = true;

      note.$update().finally(function() {
        $scope.isSubmitting = false;
        $location.path("/notes/" + note.id);
      });
    }
  });
