(function() {
  'use strict';

  angular
    .module('sistemaAluno')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/usuario', {
        templateUrl: 'app/usuario/usuario.html',
        controller: 'UsuarioController',
      })
      .when('/usuario/cadastraraluno', {
        templateUrl: 'app/usuario/usuario.formaluno.html',
        controller: 'UsuarioController',
      })
      .when('/usuario/:alunoId', {
        templateUrl: 'app/usuario/usuario.formaluno.html',
        controller: 'UsuarioController',
      })
      .when('/aluno', {
        templateUrl: 'app/aluno/aluno.html',
        controller: 'AlunoController',
      })
      .when('/aluno/:alunoId', {
        templateUrl: 'app/aluno/aluno.html',
        controller: 'AlunoController',
      })
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
