/*global angular*/

var core = angular.module('modernPraxis.core');

core.directive('mpYesNoButton', function() {
  return {
    restrict: 'E',
    scope: {
    
    },
    templateUrl: 'core/components/yesNoButton/yesNoButtonDirective.template.html'
  };
});