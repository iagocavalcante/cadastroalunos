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
        controllerAs: 'usuario'
      })
      .when('/usuario/formaluno', {
        templateUrl: 'app/usuario/usuario.formaluno.html',
        controller: 'UsuarioController',
        controllerAs: 'usuario'
      })
      .when('/usuario/:alunoId', {
        templateUrl: 'app/usuario/usuario.formaluno.html',
        controller: 'UsuarioController',
        controllerAs: 'usuario'
      })
      .when('/aluno', {
        templateUrl: 'app/aluno/aluno.html',
        controller: 'AlunoController',
        controllerAs: 'aluno'
      })
      .when('/aluno/:alunoId', {
        templateUrl: 'app/aluno/aluno.html',
        controller: 'AlunoController',
        controllerAs: 'aluno'
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
