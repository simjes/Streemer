angular.module('streemer', ['ionic', 'streemer.controllers'])

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                    .state('start', {
                        url: '/',
                        templateUrl: 'templates/startPage.html',
                        controller: 'TwitchCtrl'
                    })
                    .state('twitchChannelList', {
                        url: '/twitchChannels',
                        templateUrl: 'templates/twitchChannelList.html',
                        controller: 'TwitchCtrl'
                    });
            $urlRouterProvider.otherwise("/");
        });

