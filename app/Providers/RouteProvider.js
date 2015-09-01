app.config(['$routeProvider', function($routeProvider) {
    $routeProvider

    .when('/content-page', {
        templateUrl: 'app/Templates/content-page.html',
        controller: 'ContentPageController'
    })
    .when('/form-page', {
        templateUrl: 'app/Templates/form-page.html',
        controller: 'FormPageController'
    })
    .when('/list-page', {
        templateUrl: 'app/Templates/list-page.html',
        controller: 'ListPageController'
    })
    .otherwise({
        redirectTo: '/content-page'
    });
}]);