'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function MyCtrl1() {
}
MyCtrl1.$inject = [];

function MyCtrl2() {
}
MyCtrl2.$inject = [];

function MyCtrl3() {
}
MyCtrl3.$inject = [];

function MyCtrl4() {
}
MyCtrl4.$inject = [];

function floatCtrl($scope) {
  $scope.floater = false;
  console.log('is this shit working?')
  $scope.dude = function(){$scope.clicked = true;};
}
