var currentGame = "";

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
          currentGame = gameName;
          numberOfChannels = 0;
          //TODO: go to correct state
          //$state.go('twitchChannelList');
        };
      }
    };
  });
