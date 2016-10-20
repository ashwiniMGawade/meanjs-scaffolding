(function () {
  'use strict';

  angular
    .module('employees')
    .filter('roles', roles);

  roles.$inject = [/*Example: '$state', '$window' */];

  function roles(/*Example: $state, $window */) {
    return function (input) {
      // Roles directive logic
      // ...

      return 'roles filter: ' + input;
    };
  }
})();
