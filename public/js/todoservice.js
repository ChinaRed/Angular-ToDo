angular
  .module('TodoApp')

  // dependency injection
  .service('TodoService', ['$http', function($http){
    
    this.list = function () {
      return $http.get('/api');
    };
    
  }]);