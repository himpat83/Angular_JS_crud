angular.module('homeApp')
    .controller('loginCtrl', function($scope, Data) {
        // create a message to display in our view
        $scope.formSubmit = function() {
            if ($scope.username != "" && $scope.password != "") {


                Data.setidData($scope.username);

                location.href = "#!employees";


            } else {
                $scope.error = "Incorrect username/password !";
            }
        };

    });