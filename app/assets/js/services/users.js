angular.module('NoteWrangler')
  .factory('Users', function($resource) {
    return $resource('/users/:id');
  });
