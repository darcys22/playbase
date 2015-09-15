var app = angular.module('myApp', ['ngRoute']);

app.controller('RootCtrl', ['$scope', function($scope){
  $scope.title = "Home Page";
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      controller : 'RootCtrl',
      templateUrl: '/assets/partials/landing.html'
    });

  $locationProvider.html5Mode(true);
}])
