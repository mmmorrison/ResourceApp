app.service("MyService", function($http){

  return {

    getter: function(resources) {
      return $http.get('https://apiandapp.herokuapp.com/')
    },

    newResource: function(resource) {
      return $http.post('https://apiandapp.herokuapp.com/', resource)
    },

    getOne: function(id) {
      return $http.get('https://apiandapp.herokuapp.com/'+id)
    },

    getComments: function(id) {
      return $http.get('https://apiandapp.herokuapp.com/test' +id)
    }

  }
});
