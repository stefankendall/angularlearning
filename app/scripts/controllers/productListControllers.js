'use strict';
angular.module('sportsStore')
  .constant('productListActiveClass', 'btn-primary')
  .constant('productListPageCount', 3)
  .controller('productListController', function ($scope, productListActiveClass, productListPageCount) {
    var selectedCategory = null;

    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;

    $scope.selectCategory = function (newCategory) {
      selectedCategory = newCategory;
      $scope.selectedPage = 1;
    };

    $scope.selectPage = function (newPage) {
      $scope.selectedPage = newPage;
    };

    $scope.categoryFilterFn = function (product) {
      return !selectedCategory || product.category === selectedCategory;
    };

    $scope.getCategoryClass = function (category) {
      return selectedCategory === category ? productListActiveClass : '';
    };

    $scope.getPageClass = function (page) {
      return $scope.selectedPage === page ? productListActiveClass : '';
    };
  });
