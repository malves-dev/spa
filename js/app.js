var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl : 'partial/home.html',
    controller  : 'HomeController'
  })
  .when('/blog', {
    templateUrl : 'partial/blog.html',
    controller  : 'BlogController'
  })
  .when('/about', {
    templateUrl : 'partial/about.html',
    controller  : 'AboutController'
  })
  .otherwise({redirectTo: '/'});
});

// Controllers
app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

app.controller('BlogController', function($scope) {
  $scope.message = 'Hello from BlogController';
});

app.controller('AboutController', function($scope) {
  $scope.message = 'Hello from AboutController';
});
