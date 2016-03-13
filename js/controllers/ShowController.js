app.controller("ShowController", function($scope, MyService, $routeParams){
    id = $routeParams.id;

    MyService.getComments(id).then(function(payload){
      $scope.resource = payload.data
      $scope.comments = payload.data.comments
      console.log($scope.resource)
      console.log($scope.comments + '*****');
      console.log('refreshed2');
    }, function(error){
      console.log("an error occurred");
    });
  });
