'use strict';

angular.module('mean.help').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('help example page', {
      url: '/help/example',
      templateUrl: 'help/views/index.html'
    });
  }
]);
