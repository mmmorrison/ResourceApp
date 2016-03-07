app.controller('ResourcesController', ['$scope', '$routeParams', 'MyService', function($scope, $routeParams, MyService){
  resources = $routeParams.resource;

    MyService.getter(resources).then(function (data) {
      $scope.resources = data.data
    })
}])
