services.factory('DataService', ['$http', function($http){
    var dataFactory = {};

    dataFactory.getData = function(){
        return $http.get("app/JSON/data.json");
    };

    return dataFactory;
}]);