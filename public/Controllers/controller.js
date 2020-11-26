 var app = angular.module('homeApp', ["ngRoute"]);

 //  app.controller('loginCtrl', function($scope) {
 //      // create a message to display in our view

 //  });

 //  app.controllangularer('empCtrl', function($scope) {
 //      // create a message to display in our view
 //  });



 //  app.controller('empdCtrl', function($scope) {
 //      // create a message to display in our view
 //  });


 app.config(['$routeProvider',
     function(
         $routeProvider
     ) {
         $routeProvider.
         when('/home', {
             templateUrl: 'home.html',
             controller: 'loginCtrl'
         }).
         when('/employees', {
             templateUrl: 'employees.html',
             controller: 'empCtrl'
         }).
         when('/employeeDetails', {
             templateUrl: 'employeeDetails.html',
             controller: 'empdCtrl'
         }).
         otherwise({
             redirectTo: '/home'
         });
     }
 ]);
 app.factory('Data', function() {

     var data = {
         empid: '',
         empname: '',
         empbdata: '',
         empage: '',
         emppassword: ''
     };

     return {
         getidData: function() {
             return data.empid;
         },
         setidData: function(praid) {
             data.empid = praid;
         }
     };
 });




 // Two controllers sharing an object that has a string in it