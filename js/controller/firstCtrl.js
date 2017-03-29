myApp.controller('firstCtrl',['$scope',function ($scope) {
    // console.log($scope.url);
    $scope.mouseObj = true;
    $scope.mouseEnter = function () {
      $scope.mouseObj = true;
      $scope.ngLink2 = 'img/12.png'
    };
    $scope.mouseLeave = function () {
      $scope.mouseObj = false;
      $scope.ngLink2 = 'img/9.png'
    };
    //微信
    $scope.one1 = true;
    $scope.one11 = function () {
      $scope.one1 = true;
      $scope.ngLink3 = 'img/xin0.png'
    };
    $scope.two11 = function () {
      $scope.one1 = false;
      $scope.ngLink3 = 'img/xin2.png'
    };
    // 微博
    $scope.one2 = true;
    $scope.one22 = function () {
      $scope.one2 = true;
      $scope.ngLink4 = 'img/wei0.png'
    };
    $scope.two22 = function () {
      $scope.one2 = false;
      $scope.ngLink4 = 'img/wei2.png'
    };
    // 百度
    $scope.one3 = true;
    $scope.one33 = function () {
      $scope.one3 = true;
      $scope.ngLink5 = 'img/bai0.png'
    };
    $scope.two33 = function () {
      $scope.one3 = false;
      $scope.ngLink5 = 'img/bai2.png'
    };
  }])
  .controller('secondCtrl',['$scope',function ($scope) {
    console.log($scope.url);
  }]);

