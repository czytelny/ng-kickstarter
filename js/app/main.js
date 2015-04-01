"use strict";

var app = angular.module("kickstarter", ['ngResource', 'ngRoute']);

app.controller("MainController", ['$scope', function ($scope) {
    $scope.messages = {
        hello: "hello ng-kickstarter from MainCtrl"
    };

    $scope.multiply = function(a) {
        return a*a;
    };
}]);