(function(){
    var ctrl = angular.module('spa');

    // Controllers
    ctrl.controller('HomeController', function($scope) {
      $scope.message = 'Hello from HomeController';
    });

    // Controllers
    ctrl.controller('BlogController', function($scope) {
      $scope.message = 'Hello from BlogController';
    });

    ctrl.controller('AboutController', function($scope) {
      $scope.message = 'Hello from AboutController';
    });
})();
