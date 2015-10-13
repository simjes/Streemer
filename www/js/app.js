//TODO: tmp variable
var numberOfChannels = 0;

angular.module('streemer', ['ionic', 'streemer.twitchController', 'streemer.hitboxController', 'streemer.gameInfo', 'streemer.channelInfo'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tabs', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })
      .state('tabs.twitch', {
        url: '/twitch',
        views: {
          'twitch-tab': {
            templateUrl: 'templates/twitch/twitchPage.html',
            controller: 'TwitchCtrl'
          }
        }
      })
      .state('tabs.twitchChannelList', {
        url: '/twitchChannels',
        views: {
          'twitch-tab': {
            templateUrl: 'templates/twitch/twitchChannelList.html',
            controller: 'TwitchCtrl'
          }
        }
      })
      .state('tabs.hitbox', {
        url: '/hitbox',
        views: {
          'hitbox-tab': {
            templateUrl: 'templates/hitbox/hitboxPage.html',
            controller: 'HitboxCtrl'
          }
        }
      })
      .state('tabs.hitboxChannelList', {
        url: '/hitboxChannels',
        views: {
          'hitbox-tab': {
            templateUrl: 'templates/hitbox/hitboxChannelList.html',
            controller: 'HitboxCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise("/tab/twitch");
  });
/*$stateProvider
 .state('start', {
 url: '/',
 templateUrl: 'templates/twitchPage.html',
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
 $urlRouterProvider.otherwise("/");*/


