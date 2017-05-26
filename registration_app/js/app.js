const myApp = angular.module('myApp', ['ngRoute'])
.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            
            templateUrl: 'views/main.html'
        })
        // .when('/directives', {
        //     templateUrl: 'views/directives.html'
        // })
        .when('/add', {
             controller: 'add',
            templateUrl: 'views/add.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}])
