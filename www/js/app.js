angular.module('streemer', ['ionic', 'streemer.controllers', 'streemer.gameInfo', 'streemer.channelInfo'])
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
                    })
                    .state('twitchStream', {
                        url: '/twitchStream',
                        templateUrl: 'templates/streamPage.html',
                        controller: 'TwitchCtrl'
                    });
            $urlRouterProvider.otherwise("/");
        });

