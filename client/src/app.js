import angular from 'angular'
angular.module("olympics", [])
  .controller("sportsController", function($http){
    $http.get("/sports").then((reponse) => {
      this.sports = reponse.data;
    });
  })
