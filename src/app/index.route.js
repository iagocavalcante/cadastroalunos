(function() {
  'use strict';

  angular
    .module('sistemaAluno')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/aluno', {
        templateUrl: 'app/partials/aluno.html',
        controller: 'AlunoController',
      })
      .when('/aluno/:alunoId', {
        templateUrl: 'app/partials/aluno.html',
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
