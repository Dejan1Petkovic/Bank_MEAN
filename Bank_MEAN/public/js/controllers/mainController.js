angular.module('data',[])

.controller('mainCtrl',function ($scope,$http,db,$location,$routeParams) {
  $scope.para = $routeParams.id;
  $scope.userForEdit = {};
  $scope.users =[];

  $scope.search = function (item) {
    if ($scope.searchText == undefined) {
      return true;
    }else {
      if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
          item.cCard.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
        return true;
      }
    }
    return false;
  }

  db.getUsers().then(function (res) {
    $scope.users = res.data;
  })

  $scope.addAccount = function () {
    db.insert($scope.user).then(function (res) {
      $scope.users = res.data;
    })
  }

  $scope.delAccount = function (id) {
    db.removeFromDb(id).then(function (res) {
      $location.path('/allAccounts');
      $scope.users = res.data;
    })
  }


    db.getOne($scope.para).then(function (res) {
      $scope.userForEdit = res.data;
    })


  $scope.editAccount = function () {
    db.editDb($scope.userForEdit).then(function (res) {
      $location.path('/allAccounts');
    })
  }


})
