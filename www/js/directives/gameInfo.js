var currentGame = "";
var numberOfChannels = 0;
var channelList;

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
        $scope.channels = [];

        $scope.goToGame = function (gameName) {
          $http.get('https://api.twitch.tv/kraken/streams', {params: {game: gameName}}).then(function (result) {
            $state.go('twitchChannelList');
            channelList = angular.fromJson(result).data;
          }, function (error) {
            alert('error: ' + error.toString());
          });
        };


        /*$scope.loadMoreChannels = function () {
          console.log("loading.....");
          $http.get('https://api.twitch.tv/kraken/streams?limit=6', {params: {game: currentGame, offset: numberOfGames}}).then(function (result) {
            numberOfChannels += 6;
            angular.forEach(angular.fromJson(result).data, function (channel) {
              $scope.channels.push(channel);
            });
            $scope.$broadcast('scroll.infiniteScrollComplete');
          }, function (error) {
            alert('error: ' + error.toString());
          });
        }*/
      }
    };
  });
