'use strict';

angular.
  module('myApp').
  config(['$routeProvider', '$locationProvider',
    function config($routeProvider, $locationProvider) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/trend', {
          template: '<trend></trend>'
        }).
        when('/home', {
          template: '<home></home>'
        }).
        when('/activities', {
          template: '<activities></activities>'
        }).
        when('/filter', {
          template: '<filter></filter>'
        }).
        when('/', {
          template: '<home></home>'
        }).
        when('/downgrade-practice',{
          template:'<downgrade-practice></downgrade-practice>'
        }).
        // otherwise('/home');
        otherwise({template:''});
    }
  ]);
