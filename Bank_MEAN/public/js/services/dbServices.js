angular.module('dbServices',[])

  .service('db',function($http) {

    this.getUsers = function () {
      return $http({
        method: 'get',
        url: '/api'
      })
    }

    this.insert = function (user) {
      return $http({
        method:'post',
        url:'/insert',
        data:{name:user.name,deposit:user.deposit,cCard:user.cCard}
      })
    }

    this.removeFromDb = function (id) {
      return $http({
        method:'post',
        url:'/delete',
        data: {id : id}
      })
    }


    this.getOne = function (id) {
      return $http({
        method:'post',
        url: '/getOne',
        data: {id : id}
      })
    }

    this.editDb = function (account) {
      return $http({
        method:'post',
        url: '/editDb',
        data: {_id : account._id,name:account.name,deposit:account.deposit,cCard:account.cCard}
      })
    }





  })
