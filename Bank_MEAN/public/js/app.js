angular.module('myApp',[
  'ngRoute',
  'data',
  'dbServices',
  'animation'
])


  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
    .when('/',{
      templateUrl: "pages/allAccounts.html",
      controller : 'mainCtrl'
    })
      .when('/allAccounts',{
        templateUrl:'pages/allAccounts.html',
        controller:'mainCtrl'
      })
      .when('/addAccount',{
        templateUrl:'pages/addAccountForm.html',
        controller: 'mainCtrl'
      })
      .when('/editDelete',{
        templateUrl:'pages/editDelete.html',
        controller: 'mainCtrl'
      })
      .when('/editForm/:id',{
        templateUrl:'pages/editForm.html',
        controller: 'mainCtrl'
      })

  })
