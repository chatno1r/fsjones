angular.module("FSJones.controllers", [])
.controller("WecomeController", ["$scope", "$location", "SEOService", function($scope, $location, SEOService) {
     SEOService.setSEO({
         title: "FSJones | home",
         //image: "http://" + $location.host() + "/images/tree-31581_960_720.png",
         description: "For fun and profit!",
         url: $location.absUrl()
     });   
}])

.controller("FormsController", ["$scope", "$location", function($scope, $location) {

}])

.controller("ContactController", ["$scope", "$location", 'Contact', function($scope, $location, Contact) {
    $scope.sendEmail = function(){
        var data = {
            fromAddress: $scope.email,
            subject: $scope.subject,
            content: $scope.body
        }
        console.log(data);
        var newEmail = new Contact(data);
        console.log(newEmail);
        newEmail.$save();
    }
}])