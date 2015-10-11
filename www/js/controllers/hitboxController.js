angular.module('streemer.hitboxController', [])
  .controller('HitboxCtrl', function ($scope, $http, $sce) {
    var stream;
    var numberOfGames = 0;
    var  imgLink = "";

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
            imgLink =  'http://edge.sf.hitbox.tv' +  game.category_logo_large;
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

    //TODO: this!
    /* $scope.loadMoreChannels = function () {
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
     };*/
  });
