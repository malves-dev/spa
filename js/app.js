var app = angular.module('spa', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl : 'partial/home.html',
    controller  : 'Home'
  })
  .when('/blog', {
    templateUrl : 'partial/blog.html',
    controller  : 'Blog'
  })
  .when('/about', {
    templateUrl : 'partial/about.html',
    controller  : 'About'
  })
  .when('/dashboard', {
    templateUrl : 'partial/dashboard.html',
    controller  : 'Dashboard'
  })
  .otherwise({redirectTo: '/'});
});

// Controllers
app.controller('Home', function($scope) {
  $scope.titulo = 'Hello from Home';
});

app.controller('Blog', function($scope) {
  $scope.titulo = 'Hello from Blog';
});

app.controller('About', function($scope) {
  $scope.titulo = 'Hello from About';
});

app.controller('Dashboard', function($scope) {
  $scope.titulo = 'Hello from Dashboard';
});
