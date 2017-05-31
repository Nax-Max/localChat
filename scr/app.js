/**
 * Created by NaxFast on 31.05.2017.
 */
(function () {
    'use strict';
    var main = angular.module('app', ['ngRoute']);

    main.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                template: '<chat-room></chat-room>'
            });

        $routeProvider.otherwise({redirectTo: '/'});
    }]);

    main.controller('AppCtrl', function ($scope) {
    });

})
();