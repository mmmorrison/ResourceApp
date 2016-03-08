app.controller("ShowController", function($scope, MyService, $routeParams){
    id = $routeParams.id;

    MyService.getOne(id).then(function(payload){
      $scope.resource = payload.data[0]
      console.log(payload);
    }, function(error){
      console.log("an error occurred");
    });
  });
