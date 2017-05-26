angular.module('SearchSrvc', [])
    .factory('SearchService', function($resource) {
        return {
            search: $resource('/api/search'),
            artist: $resource('/api/artist'),
            albums: $resource('/api/albums')
        }
    })