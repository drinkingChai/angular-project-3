angular.module('NoteWrangler')
  .controller('NotesShowController', function(Notes, $scope, $routeParams, $location) {
    $scope.note = Notes.get({id: $routeParams.id});

    $scope.deleteNote = function(note) {
      note.$remove().then(function(){
        $location.path('/notes');
      });
    };
  });
