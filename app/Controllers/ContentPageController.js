controllers.controller('ContentPageController', ['$scope', 'DataService', function ($scope, dataService) {
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.buttonsPages = [];

    dataService.getData().then(function (data) {
        $scope.myData = data.data;
    });

    $scope.numberOfPages = function(){
        if($scope.myData == undefined){
            return 0;
        }

        return Math.ceil($scope.myData.length/$scope.pageSize);
    };

    $scope.buttonsPages = function(count){
        var tempPages = [];

        for(var i = 1; i <= count; i++){
            tempPages.push(i);
        }

        return tempPages;
    };

    $scope.switchToPage = function(number){
        number = +number;

        $scope.currentPage = number;
    }
}]);