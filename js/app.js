var spa =angular.module('spa', ['ngRoute', 'controllers']);

spa.config(function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl : 'partials/home.html',
    controller  : 'Home'
  })
  .when('/blog', {
    templateUrl : 'partials/blog.html',
    controller  : 'Blog'
  })
  .when('/about', {
    templateUrl : 'partials/about.html',
    controller  : 'About'
  })
  .when('/dashboard', {
    templateUrl : 'partials/dashboard.html',
    controller  : 'Dashboard'
  })
  .otherwise({
    redirectTo : '/'}
  );
});
