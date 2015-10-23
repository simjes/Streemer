var numberOfChannels = 0;
var stream = "";

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
      .state('tabs.twitchStream', {
        url: '/twitchStream',
        cache: false,
        views: {
          'twitch-tab': {
            templateUrl: 'templates/streamPage.html',
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
      })
      .state('tabs.hitboxStream', {
        url: '/hitboxStream',
        cache: false,
        views: {
          'hitbox-tab': {
            templateUrl: 'templates/streamPage.html',
            controller: 'HitboxCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise("/tab/twitch");
  })
  .controller('TabsController', function($scope, $state) {
    $scope.onTabSelected = function (selectedTab) {
      switch (selectedTab) {
        case 'twitch':
              $state.go('tabs.twitch');
              break;
        case 'hitbox':
              $state.go('tabs.hitbox');
              break;
      }
    }
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


