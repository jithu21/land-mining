angular.module('mean.help').controller('UserController', ['$scope', 'Global', 'Help','$http',
  function($scope, Global, Help,$http) {
    $scope.options={};

    $scope.question1 = {
      questionText: "This is a test question.",
      choices: [{
        id: 1,
        text: "Commercial Purpose",
        isUserAnswer: "false"
      }, {
        id: 2,
        text: "Family",
        isUserAnswer: "true"
      }, {
        id: 3,
        text: "Bachelors",
        isUserAnswer: "false"
      }]
    };

    $scope.insert_user= function(user_name,city_from,city_looking, id )
    {
      console.log(user_name,city_from,city_looking,id)
//      $http({
//        method: 'GET',
//        url: '/acme/api?time='+time+'&user_id='+user_id+'&event='+event+'&event_type='+event_type+'&product_id='+product_id+'&price='+price+'&phrase='+phrase+'&order_id'+order_id,
//        headers: {
//          'content-type': 'application/json; charset=utf-8',
//          'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description'
//        }
//      }).success(function (data) {
//        if (data) {
//          $scope.time=$scope.user_id=$scope.event=$scope.event_type=$scope.product_id=$scope.price=$scope.phrase=$scope.order_id="";
//          $scope.info_show = true;
//          $scope.user=data;
//        }
//      }).error(function (data, status, headers, config) {
//        $scope.status_code = status;
//        $scope.info_error = false;
//        $scope.info_show = false;
//      });


    };
    $scope.global = Global;
    $scope.package = {
      name: 'Help'
    };
  }
]);

