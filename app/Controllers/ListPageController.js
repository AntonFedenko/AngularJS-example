controllers.controller('ListPageController', ['$scope', 'DataService', function ($scope, dataService) {
    $scope.modalData = {
        isClose : true,
        data: {
            header: '',
            content: ''
        }
    };

    dataService.getData().then(function (data) {
        $scope.myData = data.data;
    });

    $scope.predicate = '';

    $scope.reverse = true;

    $scope.orderBy = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;

        $scope.predicate = ($scope.predicate == predicate && !$scope.reverse)? '' : predicate;

        $scope.iconClass = $scope.reverse ? 'ascending' :  'descending';
    };

    $scope.closeModal = function(){
        $scope.modalData.isClose = true;
    };

    $scope.openModal = function(data){
        $scope.modalData.isClose = false;

        var tempArr = [
            {
                name: 'Age',
                value: data.age
            },
            {
                name: 'Gender',
                value: data.gender
            },
            {
                name: 'Company',
                value: data.company
            },
            {
                name: 'Address',
                value: data.address
            },
            {
                name: 'Phone',
                value: data.phone
            },
            {
                name: 'About',
                value: data.about
            }
        ];

        $scope.modalData.data = {
            header : data.name,
            content: tempArr
        };
    };
}]);