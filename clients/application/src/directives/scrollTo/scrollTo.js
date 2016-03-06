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


    scrollToCtrl.link = "#" + $attrs.anchor;

    scrollToCtrl.action = function() {
        var $target;

        if (scrollToCtrl.link) {
          $target = $(scrollToCtrl.link);
        }

        element("body").animate({scrollTop: $target.offset().top}, "slow");
    };
  }


})(angular);
