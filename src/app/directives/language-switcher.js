(function () {
  'use strict';

  RAML.Directives.language = function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/language-switcher.tpl.html',
      controller: function ($scope, $translate) {
        $scope.switchLanguage = function (key) {
          $translate.use(key);
          $translate.refresh(key);
        };
        $scope.languages = [{name: 'English', key: 'en'},
                            {name: 'Japanese', key: 'ja'}];
      }
    };
  };

  angular.module('RAML.Directives')
    .directive('languageSwitcher', RAML.Directives.language);
})();

