angular.module('NoteWrangler')
  .factory('Notes', function($resource) {
    return $resource('http://localhost:8000/server/notes.json');
  });
