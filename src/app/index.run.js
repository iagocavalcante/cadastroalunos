(function() {
  'use strict';

  angular
    .module('sistemaAluno')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
