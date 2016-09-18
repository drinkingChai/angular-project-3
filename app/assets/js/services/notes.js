angular.module('NoteWrangler')
  .factory('Notes', function($resource) {
    return $resource('/notes/:id');
  });
