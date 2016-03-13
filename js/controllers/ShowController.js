app.controller("ShowController", function($scope, MyService, $routeParams){
    id = $routeParams.id;

    MyService.getComments(id).then(function(payload){
      $scope.resource = payload.data
    }, function(error){
      console.log("an error occurred");
    });
  });
