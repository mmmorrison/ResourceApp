app.controller("ShowController", function($scope, MyService, $routeParams){
    id = $routeParams.id;

    MyService.getComments(id).then(function(payload){
      $scope.resource = payload.data
      console.log($scope.resource)
      console.log('refreshed');
    }, function(error){
      console.log("an error occurred");
    });
  });
