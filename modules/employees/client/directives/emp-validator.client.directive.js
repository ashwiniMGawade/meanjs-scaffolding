(function () {
  'use strict';

  angular
    .module('employees')
    .directive('empValidator', empValidator);

  empValidator.$inject = [/*Example: '$state', '$window' */];

  function empValidator(/*Example: $state, $window */) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // Emp validator directive logic
        // ...

        element.text('this is the empValidator directive');
      }
    };
  }
})();
