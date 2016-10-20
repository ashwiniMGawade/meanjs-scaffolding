(function() {
  'use strict';

  // Employees module config
  angular
    .module('employees')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Config logic
    // ...
  }
})();
