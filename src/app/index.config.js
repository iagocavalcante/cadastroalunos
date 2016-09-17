(function() {
  'use strict';

  angular
    .module('sistemaAluno')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    //Configuracoes Backendless
    var APP_ID = '3AD2E853-A2D3-F0D1-FFD4-E42A3523D800';
    var JS_SECRET_KEY = 'BB80C5E5-18F1-F6AB-FF37-27FA0ED33B00';
    var APP_VERSION = 'v1';

    Backendless.initApp(APP_ID, JS_SECRET_KEY, APP_VERSION);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;


  }

})();
