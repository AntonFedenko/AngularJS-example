controllers.controller('FormPageController', ['$scope', function ($scope) {
    $scope.countClick = 0;
    $scope.changeValueInput = function (){
        $scope.countClick++;
    }
}]);