'use strict';

angular.module('mean.help').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('help example page', {
      url: '/help/housing',
      templateUrl: 'help/views/hview.html'
    });
  }
]);
