 

  'use strict';

  angular.module('authApp', ['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])
    .config(function($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider) {

      authProvider.init({
        domain: 'nageshpatil76.auth0.com',
        clientID: 'gzYHsvv1lrYFAORxhDt5XGdhn3dlAWKv'
      }); 

      $urlRouterProvider.otherwise("/home");

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'components/home/home.tpl.html'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: 'components/profile/profile.tpl.html',
          controller: 'profileController as user'
        });

      

})