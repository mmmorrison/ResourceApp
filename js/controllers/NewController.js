app.controller('NewController', ['$scope', '$routeParams', 'MyService', function($scope, $routeParams, MyService){
  resources = $routeParams.resource;
  $scope.works='this is the new page and the new controller is working'

    
}])
