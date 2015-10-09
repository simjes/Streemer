var channelList;
var stream;
//var chat;


angular.module('streemer.controllers', [])
  .controller('TwitchCtrl', function ($scope, $http, $sce) {
    $scope.init = function () {
      $http.get('https://api.twitch.tv/kraken/games/top?limit=21').then(function (result) {
        $scope.data = angular.fromJson(result).data;
      }, function (error) {
        alert('error: ' + error.toString());
      });
    };

    $scope.populateChannels = function () {
      $scope.channels = channelList.streams;
    };

    $scope.getStreamLink = function () {
      return $sce.trustAsResourceUrl(stream);
    };

    /*
     $scope.getStreamChat = function () {
     return $sce.trustAsResourceUrl(chat);
     }; */
  });
