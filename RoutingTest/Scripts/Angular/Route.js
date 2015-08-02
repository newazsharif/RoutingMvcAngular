//var myApp = angular.module('MyApp', ['ngRoute']);
//myApp.config(function ($routeProvider) {
//    $routeProvider
//    .when('/',
//    {
//        templateUrl: 'Home'
//    })
//    .when('/index',
//    {
//        templateUrl: '/Home/index'
//    })
//    when('/About',
//    {
//        templateUrl: '/Home/About'
//    })
//    when('/Contact',
//    {
//        templateUrl: 'Home/Contact'
//    })
//    .otherWise
//    {
//        templateUrl: 'Home'
//    };
//});


angular.module('MyApp', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: 'Home/About'
        })
        // route for the home page
        .when('/Login', {
            templateUrl: 'Account/Login'

        })

        // route for the about page
        .when('/About', {
            templateUrl: 'Home/About'

        })

        // route for the contact page
        .when('/Contact', {
            templateUrl: 'Home/Contact'

        })
    .otherWise
        {
            redirectTo: "/"
        };
    //$locationProvider.html5Mode(true).hashPrefix('!')

});



