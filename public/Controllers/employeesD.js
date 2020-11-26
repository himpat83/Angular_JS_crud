angular.module('homeApp')
    .controller('empdCtrl', function($scope, Data) {


        $scope.userdetails = Data.getidData()

        //  $scope.userdetails = $localStorage.uname;

        // create a message to display in our view
    });