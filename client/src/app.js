import angular from 'angular'
import 'angular-ui-router'

angular.module("olympics", ['ui.router'])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/sports')

    $stateProvider
      .state('sports', {
        url: '/sports',
        resolve: {
          sportsService: function($http) {
            return $http.get("/sports")
          }
        },
        templateUrl: 'sports/sports-nav.html',
        controller: function(sportsService) {
          this.sports = sportsService.data;
        },
        controllerAs: 'sportsController'
      })
      .state('sports.medals', {
        url: '/:sportName',
        templateUrl: 'sports/sports-medals.html',
        resolve: {
          sportService: function($http, $stateParams) {
            return $http.get(`/sports/${ $stateParams.sportName }`);
          }
        },
        controller: function(sportService) {
          this.sport = sportService.data;
        },
        controllerAs: 'sportCtrl'
      })
  });
