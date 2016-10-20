(function() {
  'use strict';

  angular
    .module('employees')
    .controller('GetUserNameController', GetUserNameController);

  GetUserNameController.$inject = ['$scope'];

  function GetUserNameController($scope) {
    var vm = this;

    // Get user name controller logic
    // ...

    init();

    function init() {
    }
  }
})();
