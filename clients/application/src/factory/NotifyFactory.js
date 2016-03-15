(function (angular) {
    'use strict';

    angular
        .module('factory.notifyStore', [
        ])
        .factory('NotifyStore', NotifyStore);

    function NotifyStore() {
        var notifyStore = this;

        notifyStore.events = [];

        // Method for adding new notification
        notifyStore.push = function(object) {
            notifyStore.events.push(object);
        };

        // Method for getting notification from here
        notifyStore.get = function() {
            var tempEvents = notifyStore.events;

            return tempEvents;
        };

        return {
            push: notifyStore.push,
            getEvents: notifyStore.get
        }
    }

})(angular);
