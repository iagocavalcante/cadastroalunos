(function() {
  'use strict';

  angular
    .module('sistemaAluno')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $location, $cookies, $cookieStore) {
    var vm = this;

    vm.login = function(username, password) {      
      if($scope.main.isAluno) {
        console.log("Login de Aluno");
        $location.path('/aluno/1');
      } else {  
        console.log("Login de Usuario");
        $location.path('/usuario');
      }
    }

  }

})();
