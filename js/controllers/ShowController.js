app.controller("ShowController", function($scope, MyService, $routeParams){
    id = $routeParams.id;

    MyService.getOne(id).then(function(payload){
      $scope.singleResource = payload.data
    }, function(error){
      console.log("an error occurred");
    });
  });
