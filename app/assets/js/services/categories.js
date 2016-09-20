angular.module('NoteWrangler')
  .factory('Categories', function($resource) {
    return $resource('/categories/:id');
  });
