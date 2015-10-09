var stream;
var numberOfGames = 0;

angular.module('streemer.controllers', [])
  .controller('TwitchCtrl', function ($scope, $http, $sce) {
    $scope.games = [];

    $scope.getStreamLink = function () {
      return $sce.trustAsResourceUrl(stream);
    };

    $scope.loadMoreGames = function () {
      $http.get('https://api.twitch.tv/kraken/games/top?limit=6', {params: {offset: numberOfGames}}).then(function (result) {
        numberOfGames += 6;
        angular.forEach(angular.fromJson(result).data.top, function(game) {
          $scope.games.push(game);
        });
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }, function (error) {
        alert('error: ' + error.toString());
      });
    };

    $scope.populateStuff = function() {
      $scope.channels = channelList.streams;
    };
  });
