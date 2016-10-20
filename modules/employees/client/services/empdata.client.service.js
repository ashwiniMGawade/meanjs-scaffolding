(function () {
  'use strict';

  angular
    .module('employees')
    .factory('employeesService', employeesService);

  employeesService.$inject = [/*Example: '$state', '$window' */];

  function employeesService(/*Example: $state, $window */) {
    // Empdata service logic
    // ...

    // Public API
    return {
      someMethod: function () {
        return true;
      }
    };
  }
})();
