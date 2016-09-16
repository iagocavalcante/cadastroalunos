(function() {
  'use strict';

  angular
    .module('sistemaAluno')
    .controller('AlunoController', AlunoController);

  /** @ngInject */
  function AlunoController($scope, $routeParams, $location) {
    var vm = this;
    vm.aluno = [];
    vm.alunos = JSON.parse(localStorage.getItem('tbalunos'));

    if($routeParams.alunoId){
      for (var i = 0; i < vm.alunos.length; i++) {
        var tmp = vm.alunos[i];
        if(tmp.matricula === $routeParams.alunoId){
          $scope.aluno = tmp;
          break;
        }
      }
      document.getElementById('img').src = $scope.aluno.image;      
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
          $location.path('/aluno');
        } else {
          aluno.matricula = 1+vm.alunos.length + '';
          vm.alunos.push(aluno);

          localStorage.setItem('tbalunos', JSON.stringify(vm.alunos));
          $location.path('/aluno');
        }
      }
    };

    vm.logOut = function() {
      console.log("LogOut");
    }

  }

})();
