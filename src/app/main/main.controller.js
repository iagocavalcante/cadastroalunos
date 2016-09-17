(function() {
  'use strict';

  angular
    .module('sistemaAluno')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $location, $cookies){
    var vm = this;
    vm.usuario = {};

    vm.login = function() {
        Backendless.UserService.login(vm.usuario.email, vm.usuario.password, true, new Backendless.Async(function userLoggedIn(user) {
          $location.path("/usuario");
        }, function gotError(err) {
          console.log("Ocorreu um erro ao logar: " + err);
        }));
    };
    // vm.login = function(username, password) {
    //   if($scope.main.isAluno) {
    //     console.log("Login de Aluno");
    //     $location.path('/aluno/1');
    //   } else {
    //     console.log("Login de Usuario");
    //     $location.path('/usuario');
    //   }
    // }

  }

})();
