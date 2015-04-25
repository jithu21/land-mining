'use strict';

/* jshint -W098 */
angular.module('mean.help').controller('HelpController', ['$scope', 'Global', 'Help',
  function($scope, Global, Help) {
    $scope.global = Global;
    $scope.package = {
      name: 'help'
    };
  }
]);
