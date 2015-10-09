var channelList;
var stream;
//var chat;

angular.module('streemer.controllers', [])
        .controller('TwitchCtrl', function ($scope, $http, $state, $sce) {
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
            };

            $scope.goToChannel = function (channelName) {
                $state.go('twitchStream');
                stream = "http://www.twitch.tv/"+ channelName + "/embed";
                //chat = "http://www.twitch.tv/"+ channelName+ "/chat";
                /* $http.get('https://api.twitch.tv/kraken/streams/' + channelName).then(function (result) {
                 $state.go('twitchStream');
                 $scope.streamer = channelName;
                 alert($scope.streamer);
                 stream = angular.fromJson(result).data;
                 }, function (error) {
                 alert('error: ' + error.toString());
                 });*/
            };

            $scope.getStreamLink = function () {
                return  $sce.trustAsResourceUrl(stream);
            };

          /*
            $scope.getStreamChat = function () {
                return $sce.trustAsResourceUrl(chat);
            }; */

        });
