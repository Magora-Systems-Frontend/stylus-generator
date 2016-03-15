(function (angular) {
    'use strict';

    angular
        .module('component.notify', [
          'factory.notifyStore'
        ])
        .component('notify', {
                templateUrl: 'components/basic/notify/notify.html',
                replace: true,
                restrict: 'E',
                controller: NotifyCtrl,
                controllerAs: 'notifyCtrl'
        });

    function NotifyCtrl(NotifyStore) {
        var notifyCtrl = this;

        notifyCtrl.getEvents = function() {
            var temp = NotifyStore.getEvents();
            return temp;
        }


    }


})(angular);
