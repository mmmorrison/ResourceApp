app.controller("ShowController", function($scope, MyService, $routeParams){
    id = $routeParams.id;
    console.log('show controller is working');

    MyService.getOne(id).then(function(payload){
      $scope.singleResource = payload.data
      console.log(payload);
    }, function(error){
      console.log("an error occurred");
    });
  });
