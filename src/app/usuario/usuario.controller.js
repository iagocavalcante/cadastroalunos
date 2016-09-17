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
    vm.alunos = Backendless.Persistence.of( Alunos ).find().data;
    // vm.alunos = JSON.parse(localStorage.getItem('tbalunos'));

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
        aluno.img = document.getElementById('input_11').value;
        var URL_PADRAO = "https://api.backendless.com/3AD2E853-A2D3-F0D1-FFD4-E42A3523D800/v1/files/imagens/";
        var byteArray = Base64Binary.decodeArrayBuffer(aluno.img);
        var nome_imagem = new Date().getTime()+".png";
        var savedFile = Backendless.Files.saveFile("imagens",nome_imagem,byteArray,true);

        $scope.aluno.image = URL_PADRAO+nome_imagem;

        if($scope.aluno.matricula){
          for (var i = 0; i < vm.alunos.length; i++) {
            var tmp = vm.alunos[i];
            if(tmp.matricula === $scope.aluno.matricula){
              vm.alunos[i] = $scope.aluno;
              break;
            }
          }
          var user = new Backendless.User();
          user.email = $scope.aluno.email;
          user.password = $scope.aluno.password;

          var al = new Alunos($scope.aluno);

          var alunosSalvos = Backendless.Persistence.of( Alunos ).save( al,new Backendless.Async(function(result){
            Backendless.UserService.register( user, new Backendless.Async( function(result){
              console.log(result);
            }));
            console.log(result);
          }));

          localStorage.setItem('tbalunos', JSON.stringify(vm.alunos));
          console.log('ok');
          $location.path('/usuario');
        } else {
          var user = new Backendless.User();
          user.email = $scope.aluno.email;
          user.password = $scope.aluno.password;
          user.name = $scope.aluno.nome;
          aluno.matricula = 1+vm.alunos.length + '';
          var al = new Alunos(aluno);

          var alunosSalvos = Backendless.Persistence.of( Alunos ).save( al,new Backendless.Async(function(result){
            Backendless.UserService.register( user, new Backendless.Async( function(result){
              console.log(result);
            }));
            console.log(result);
          }));
          vm.alunos.push(aluno);

          localStorage.setItem('tbalunos', JSON.stringify(vm.alunos));
          $location.path('/usuario');
        }
      }
    };



    vm.logout = function() {
      Backendless.UserService.logout(new Backendless.Async(function userLoggedIn(user) {
        $location.path("#/");
      }, function gotError(err) {
        console.log(err);
      }));
    }
  }

})();
