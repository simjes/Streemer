angular.module('streemer.gameInfo', [])
  .directive('gameInfo', function () {
    return {
      restrict: 'E',
      scope: {
        game: '='
      },
      replace: true,
      templateUrl: 'templates/directive/gameInfo.html',
      controller: function ($scope, $http, $state) {
        $scope.goToGame = function (gameName) {
          $http.get('https://api.twitch.tv/kraken/streams?limit=10', {params: {game: gameName}}).then(function (result) {
            numberOfChannels = 10;
            $state.go('twitchChannelList');
            channelList = angular.fromJson(result).data;
          }, function (error) {
            alert('error: ' + error.toString());
          });
        };
      }
    };
  });
