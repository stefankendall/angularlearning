'use strict';

var model = {
  user: "Adam"
};

var app = angular.module('angularApp', []);

app.run(function($http){
  $http.get("todo.json").success(function(data){
    model.items = data;
  });
});

app.filter("checkedItems", function () {
  return function (items, showComplete) {
    var results = [];
    angular.forEach(items, function (item) {
      if (!item.done || showComplete) {
        results.push(item);
      }
    });
    return results;
  }
});

app.controller('MainCtrl', function ($scope) {
  $scope.todo = model;

  $scope.incompleteCount = function () {
    var count = 0;
    angular.forEach($scope.todo.items, function (item) {
      if (!item.done) {
        count++;
      }
    });
    return count;
  };

  $scope.warningLevel = function () {
    return $scope.incompleteCount() < 3 ? 'label-success' : 'label-warning';
  };

  $scope.addNewItem = function (actionText) {
    $scope.todo.items.push({action: actionText, done: false});
  };

  $scope.rowClass = function (item) {
    return item.done ? 'success' : '';
  };
});
