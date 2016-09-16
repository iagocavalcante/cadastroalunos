(function() {
  'use strict';

  angular
    .module('sistemaAluno')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.login = function(username, password) {
      console.log(username, password);
      //login de usuario
      //Redirecionar para user.html
    }

  }

})();
