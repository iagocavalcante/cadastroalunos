(function() {
  'use strict';

  angular
    .module('sistemaAluno')
    .controller('UsuarioController', UsuarioController);

  /** @ngInject */
  function UsuarioController($routeParams, $scope, $location) {
    var vm = this;

    if (!localStorage.getItem('tbalunos')) {
      localStorage.setItem('tbalunos', '[]')
    }

    vm.filtro = '';
    vm.aluno = [];
    vm.alunos = JSON.parse(localStorage.getItem('tbalunos'));

    vm.removeAluno = function() {

    };

    if($routeParams.alunoId){
      for (var i = 0; i < vm.alunos.length; i++) {
        var tmp = vm.alunos[i];
        if(tmp.matricula === $routeParams.alunoId){
          $scope.aluno = tmp;
          break;
        }
      }
    }

    vm.salvar = function(aluno) {
      if(!aluno){
        alert('Por favor, preencha todos os campos!');
      } else {
        aluno.image = document.getElementById('input_11').value;
        if($scope.aluno.matricula){
          for (var i = 0; i < vm.alunos.length; i++) {
            var tmp = vm.alunos[i];
            if(tmp.matricula === $scope.aluno.matricula){
              vm.alunos[i] = $scope.aluno;
              break;
            }
          }

          localStorage.setItem('tbalunos', JSON.stringify(vm.alunos));
          console.log('ok');
          $location.path('/usuario');
        } else {
          aluno.matricula = 1+vm.alunos.length + '';
          vm.alunos.push(aluno);

          localStorage.setItem('tbalunos', JSON.stringify(vm.alunos));
          $location.path('/usuario');
        }
      }
    };

  }

})();
