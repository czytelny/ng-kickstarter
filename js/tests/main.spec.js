describe("MainController", function () {
    beforeEach(module('kickstarter'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));


    describe('$scope.grade', function () {
        var $scope, controller;

        beforeEach(function () {
            $scope = {};
            controller = $controller('MainController', { $scope: $scope });
        });

        it('should multiply given value', function () {
            var result = $scope.multiply(4);
            expect(result).toEqual(16);
        });


    });
});