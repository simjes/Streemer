angular.module('streemer.channelInfo', [])
  .directive('channelInfo', function () {
    return {
      restrict: 'E',
      scope: {
        channel: '='
      },
      replace: true,
      templateUrl: 'templates/directive/channelInfo.html',
      controller: function ($scope, $http, $state) {
        $scope.goToChannel = function (channelName) {
          switch ($state.current.name) {
            case 'tabs.twitchChannelList':
              stream = "http://www.twitch.tv/" + channelName + "/embed";
              $state.go('tabs.twitchStream');
              break;
            case 'tabs.hitboxChannelList':
              stream = "http://hitbox.tv/#!/embed/" + channelName;
              $state.go('tabs.hitboxStream');
              break;
          }
        };
      }
    };
  });
