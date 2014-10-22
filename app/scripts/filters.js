angular.module('exampleApp.Filters', []).filter('dayName', function () {
    return function (input) {
        return angular.isNumber(input) ? dayNames[input] : input;
    };
});