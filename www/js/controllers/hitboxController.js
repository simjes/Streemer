angular.module('streemer.hitboxController', [])
  .controller('HitboxCtrl', function ($scope, $http, $sce) {
    var stream;
    var numberOfGames = 0;
    var imgLink = "";

    $scope.games = [];
    $scope.channels = [];

    /*$scope.getStreamLink = function () {
     return $sce.trustAsResourceUrl(stream);
     };*/

    $scope.loadMoreGames = function () {
      $http.get('https://api.hitbox.tv/games', {
        params: {
          limit: 6,
          offset: numberOfGames,
          liveonly: true
        }
      }).then(function (result) {
        numberOfGames += 6;
        angular.forEach(angular.fromJson(result).data.categories, function (game) {
          if (game.category_logo_large === null) {
            imgLink = 'img/ionic.png'
          } else {
            imgLink = 'http://edge.sf.hitbox.tv' + game.category_logo_large;
          }

          $scope.games.push({
            name: game.category_name,
            img: imgLink,
            viewers: game.category_viewers,
            searchTerm: game.category_seo_key
          });
        });
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }, function (error) {
        alert('error: ' + error.toString());
      });
    };

    $scope.loadMoreChannels = function () {
      $http.get('https://api.hitbox.tv/media/live/list', {
        params: {
          limit: 6,
          game: currentGame,
          start: numberOfChannels
        }
      }).then(function (result) {
        angular.forEach(angular.fromJson(result).data.livestream, function (channel) {
          $scope.channels.push({
            caster_name: channel.media_display_name,
            img: 'http://edge.sf.hitbox.tv' +  channel.media_thumbnail_large,
            name: channel.media_status,
            viewers: channel.media_views
          });
        });
        numberOfChannels += 6;
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }, function (error) {
        alert('error: ' + error.toString());
      });
    };
  });
