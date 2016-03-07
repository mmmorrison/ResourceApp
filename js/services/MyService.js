app.service("MyService", function($http){

  return {
    
    getter: function(resources) {
      return $http.get('https://apiandapp.herokuapp.com/')
    },




  }
});


// app.service('MyService', ['$http', function($http) {
//   return {
//     getter: function(search) {
//        return $http.get("http://www.omdbapi.com/?s=" + search);
//     },
//     oneMovie: function(movieID) {
//       return $http.get("http://www.omdbapi.com/?i=" + movieID + "&plot=full");
//     }
//   }
// }]);
