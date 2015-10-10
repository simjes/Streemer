var stream;
var numberOfGames = 0;
var numberOfChannels = 0;

angular.module('streemer.controllers', [])
  .controller('TwitchCtrl', function ($scope, $http, $sce) {
    $scope.games = [];
    $scope.channels = [];

    $scope.getStreamLink = function () {
      return $sce.trustAsResourceUrl(stream);
    };

    $scope.loadMoreGames = function () {
      $http.get('https://api.twitch.tv/kraken/games/top', {
        params: {
          limit: 6,
          offset: numberOfGames
        }
      }).then(function (result) {
        numberOfGames += 6;
        angular.forEach(angular.fromJson(result).data.top, function (game) {
          $scope.games.push(game);
        });
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }, function (error) {
        alert('error: ' + error.toString());
      });
    };

    $scope.loadMoreChannels = function () {
      $http.get('https://api.twitch.tv/kraken/streams', {
        params: {
          limit: 6,
          game: currentGame,
          offset: numberOfChannels
        }
      }).then(function (result) {
        angular.forEach(angular.fromJson(result).data.streams, function (channel) {
          $scope.channels.push(channel);
        });
        numberOfChannels += 6;
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }, function (error) {
        alert('error: ' + error.toString());
      });
    }
  });
