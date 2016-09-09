(function() {
  'use strict';

  angular
    .module('sistemaAluno')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;    

    vm.filtro = '';

    vm.alunos = [];

    if (!localStorage.getItem('tbalunos')) {
      localStorage.setItem('tbalunos', '[]')
    }

    vm.buscaAlunos = function() {
      vm.alunos = JSON.parse(localStorage.getItem('tbalunos'));
    };
    vm.buscaAlunos();

    vm.removeAluno = function() {

    };

    vm.uploadFile = function() {
      console.log('laksjd');
      // var file = this.files[0];console.log(file.name);
    };

  }

})();
