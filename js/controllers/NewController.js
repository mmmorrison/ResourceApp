app.controller("NewController", function($scope, MyService, $routeParams) {
    $scope.resource = {};
    $scope.newResource = function(){
      MyService.newResource($scope.resource).then(function() {
        })
      }
  });
