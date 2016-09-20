angular.module('NoteWrangler')
  .directive('title', function($timeout) {
    return function(scope, element, attrs) {
      $timeout(function() {
        $(element).tooltip();
      });

      // the destroy element comes from the boostrap javascript library
      // each tooltip has a destroy method. Since the default tooltip was overwritten,
      // each tooltip keeps it's instance and creates new instances every time it's called
      // to clear out the memory/prevent memory leak, tooltip's destroy has to be called on it's destroy
      scope.$on('$destroy', function() {
        $(element).tooltip('destroy');
      });
    }
  });
