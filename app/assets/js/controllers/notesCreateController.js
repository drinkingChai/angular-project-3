angular.module('NoteWrangler')
  .controller('NotesCreateController', function(Notes, Categories, $scope, $location) {
    $scope.note = new Notes();
    $scope.categories = Categories.query();

    $scope.saveNote = function(note) {
      $scope.isSubmitting = true;

      note.$save().then(function() {
        $location.path("/notes");
      }).finally(function() {
        $scope.isSubmitting = false;
      });
    }
  });
