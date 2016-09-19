angular.module('NoteWrangler')
  .controller('NotesEditController', function(Notes, $scope, $routeParams, $location) {
    $scope.note = Notes.get({id: $routeParams.id});
    $scope.isSubmitting = false;

    $scope.saveNote = function(note) {
      $scope.isSubmitting = true;

      note.$update().finally(function() {
        $scope.isSubmitting = false;
        $location.path("/notes/" + note.id);
      });
    }
  });
