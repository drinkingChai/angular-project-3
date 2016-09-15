angular.module('NoteWrangler')
  .controller('NotesIndexController', function(Notes, $scope) {
    console.log(Notes.query());
  });
