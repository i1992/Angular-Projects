var app = angular
    .module('SearchCtrl', [])
    .controller('SearchController', function($scope, SearchService) {

        $scope.searchShow = () => {
            // console.log(show)
            $scope.artist = null
            $scope.albums = null
            SearchService.search.get({
                    show: $scope.showname
                },
                (response) => {
                   $scope.results = response.artists.items
                   console.log(response.artists.items)
                })

        }
        $scope.searchDetails = (id) => {
            $scope.results = null
            $scope.id = id
            SearchService.artist.get({
                 artist: $scope.id
                },
                (artist) => {                   
                    $scope.artist = artist
                    $scope.name = artist.name
                    
                })

            SearchService.albums.get({

                    albums : $scope.id
                },
                (albums) => {

                    $scope.albums = albums.items
                    // console.log(albums.items[0].name)

                })

        }
    })
.directive('customDirectiveToRenderDetails', function() {
  return {
    
    templateUrl:'custom-directive-to-render-details.html'
  };
});    

