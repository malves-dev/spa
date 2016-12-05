
(function(){
    var route = angular.module('spa', ['ngRoute']);

    route.config(function($routeProvider) {
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
})();
