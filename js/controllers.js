var controllers = angular.module('controllers', []);

controllers.controller('Home', function($scope){
  $scope.titulo = 'Blog with Angular SPA';
  $scope.image = 'angularjs-banner.jpg';
});

controllers.controller('Blog', function($scope){
  $scope.titulo = 'Political systems around the world';
  $scope.blog = [
    {
      id : 1,
      author : 'José Silva',
      age : 31,
      country : 'Brasil',
      city : 'Bauru',
      avatar : 'avatar5.png',
      post : [
            {
            date : new Date ('December 5, 2016'),
            comments : 'At this moment, the shadows prevail in the brazilian state. The population, though also part of this shadow, is still inert to get out of it.',
            like : 0
          }
      ]
    },
    {
      id : 2,
      author : 'Marcos Maciel',
      age : 40,
      country : 'Brasil',
      city : 'Cuiabá',
      avatar : 'avatar2.png',
      post : [
            {
            date : new Date ('December 8 , 2016'),
            comments : 'The friend José Silva, is right, because the population also has its share of guilt, this shadow still flying over the brazilian state. When this conscience is taken by the people, then the brazilian state will be much better.',
            like : 0
          }
      ]
    },
    {
      id : 3,
      author : 'John Dokle',
      age : 26,
      country : 'Canada',
      city : 'Vancuver',
      avatar : 'avatar3.png',
      post : [
            {
            date : new Date ('December 1, 2016'),
            comments : 'Here in Canada, the policy is stable, in the political environment corruption is very low. Compared to Brazil, Canada is a paradise.',
            like : 0
          }
      ]
    } ,
    {
      id : 4,
      author : 'Mary Klessy',
      age : 36,
      country : 'USA',
      city : 'New York',
      avatar : 'avatar-women1.png',
      post : [
            {
            date : new Date ('December 1, 2016'),
            comments : 'So here in New York, after the presidential election speculation, where we expected Hilary Clinton to win the presidency, but it was a surprise that Trump is now the new president. I do not know what the future political of our nation will be! But my friend José Silva is worse off, because his country is in a horrible situation, corruption is rooted in every corner of that country.',
            like : 0
          }
      ]
    }
  ];
});

controllers.controller('Dashboard', function($scope){
  $scope.titulo = 'Dashboard';
});

controllers.controller('About', function($scope){
  $scope.titulo = 'SPA with Angular';
  $scope.image = 'angular-city.jpg';
});
