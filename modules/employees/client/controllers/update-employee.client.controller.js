(function() {
  'use strict';

  angular
    .module('employees')
    .controller('UpdateEmployeeController', UpdateEmployeeController);

  UpdateEmployeeController.$inject = ['$scope'];

  function UpdateEmployeeController($scope) {
    var vm = this;

    // Update employee controller logic
    // ...

    init();

    function init() {
    }
  }
})();
