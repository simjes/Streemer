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
      $http.get('https://api.twitch.tv/kraken/games/top?limit=6', {params: {offset: numberOfGames}}).then(function (result) {
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
      console.log($scope.channels);


      $http.get('https://api.twitch.tv/kraken/streams?limit=6', {
        params: {
          game: currentGame,
          offset: numberOfChannels
        }
      }).then(function (result) {
        console.log(result);
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
