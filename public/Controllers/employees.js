angular.module('homeApp')
    .controller('empCtrl', function($scope, $http, Data) {
        //  create a message to display in our view
        $scope.userdetails = Data.getidData()
        $scope.size = 90;

        var refresh = function() {

            $http.get("/contactlist")
                .then(function(response) {
                    console.log("i got data" + JSON.stringify(response));
                    $scope.contactlist = response.data;
                    $scope.contact.empid = "";
                    $scope.contact.empname = "";
                    $scope.contact.empbdate = "";

                });

        }
        $scope.addContact = function() {
            console.log($scope.contact);
            if ($scope.contact.empid != '' && $scope.contact.empname != "" && $scope.contact.empbdate != "") {
                $http.post('/contactlist', $scope.contact).then(function(response) {
                    console.log(response);
                    refresh();


                });
            }
        }

        $scope.remove = function(id) {
            console.log(id);
            $http.delete('/contactlist/' + id).then(function(response) {
                console.log(response);
                refresh();

            });
        }
        $scope.edit = function(id) {
            console.log("update req =" + id);
            $http.get('/contactlist/' + id).then(function(response) {
                console.log("updated data =" + JSON.stringify(response));
                $scope.contact = response.data;
            });

        }
        $scope.update = function() {
            console.log($scope.contact._id);
            $http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function(response) {
                refresh();

            });

        }

        $scope.deselect = function() {

            $scope.contact.empid = "";
            $scope.contact.empname = "";
            $scope.contact.empbdate = "";
        }

        refresh();

    });

angular.module('homeApp').directive('font-scale', function() {

    return {

        restrict: 'AECM',
        link: function($scope, $element, $attr) {
            $scope.$watch($attr['font-scale'], function(newVal) {
                $element.css({ 'font-size': newVal + '%' });
            })
        }
    }
});