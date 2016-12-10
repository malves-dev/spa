var controllers = angular.module('controllers', []);

controllers.controller('Home', function($scope){
  $scope.titulo = 'From Home controller';
});

controllers.controller('Blog', function($scope){
  $scope.titulo = 'From Blog controller';
});

controllers.controller('Dashboard', function($scope){
  $scope.titulo = 'From Dashboard controller';
});

controllers.controller('About', function($scope){
  $scope.titulo = 'From About controller';
});
