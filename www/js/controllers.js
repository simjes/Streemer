var channelList;

angular.module('streemer.controllers', [])
        .controller('TwitchCtrl', function ($scope, $http, $state) {
            $scope.init = function () {
                $http.get('https://api.twitch.tv/kraken/games/top?limit=21').then(function (result) {
                    $scope.data = angular.fromJson(result).data;
                }, function (error) {
                    alert('error: ' + error.toString());
                });
            };

            $scope.goToGame = function (gameName) {
                $http.get('https://api.twitch.tv/kraken/streams', {params: {game: gameName}}).then(function (result) {
                    $state.go('twitchChannelList');
                    channelList = angular.fromJson(result).data;
                }, function (error) {
                    alert('error: ' + error.toString());
                });
            };

            $scope.populateChannels = function () {
                $scope.channels = channelList.streams;
            }
        });