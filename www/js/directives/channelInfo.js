
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
          $state.go('twitchStream');
          $stream = "http://www.twitch.tv/" + channelName + "/embed";
          //chat = "http://www.twitch.tv/"+ channelName+ "/chat";
        };


      }
    };
  });
