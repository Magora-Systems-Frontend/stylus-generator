(function (angular) {
  'use strict';

  angular
    .module('directive.scrollTo', [
    ])
    .directive('scrollTo', function () {
      return {
        templateUrl: 'directives/scrollTo/scrollTo.html',
        replace: true,
        restrict: 'E',
        scope: true,
        bindToController: true,
        controller: ScrollToCtrl,
        controllerAs: 'scrollToCtrl'
      }
    });

  function ScrollToCtrl($scope,$attrs ) {
    var scrollToCtrl = this;


    scrollToCtrl.action = function() {
        var $target;

        if ($attrs.anchor) {
          $target = $attrs.anchor;
        }


        $("body").animate({scrollTop: $($target).offset().top - 100}, "slow");
    };
  }


})(angular);
