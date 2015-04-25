'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
  function($scope, Global) {
    $scope.global = Global;

    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    $scope.result = ''
//    $scope.details = ''
    $scope.options = {};

    $scope.form = {
      type: 'geocode',
      bounds: {SWLat: 49, SWLng: -97, NELat: 50, NELng: -96},
      country: 'ca',
      typesEnabled: false,
      boundsEnabled: false,
      componentEnabled: false,
      watchEnter: true
    }

    //watch form for changes
    $scope.watchForm = function () {
      return $scope.form
    };
    $scope.$watch($scope.watchForm, function () {
      $scope.checkForm()
    }, true);


    //set options from form selections
    $scope.checkForm = function() {

      $scope.options = {};

      $scope.options.watchEnter = $scope.form.watchEnter

      if ($scope.form.typesEnabled) {
        $scope.options.types = $scope.form.type
      }
      if ($scope.form.boundsEnabled) {

        var SW = new google.maps.LatLng($scope.form.bounds.SWLat, $scope.form.bounds.SWLng)
        var NE = new google.maps.LatLng($scope.form.bounds.NELat, $scope.form.bounds.NELng)
        var bounds = new google.maps.LatLngBounds(SW, NE);
        $scope.options.bounds = bounds

      }
      if ($scope.form.componentEnabled) {
        $scope.options.country = $scope.form.country
      }
    };


    $scope.sites = {
      'makeapoint':{
        'name':'makeapoint',
        'text':'Makeapoint is a platform to craft and fine-tune ideas and messages providing a graphical experience which brough an offline methodlogy online',
        'author':'Linnovate',
        'link':'http://www.linnovate.net',
        'image':'/theme/assets/img/makeapoint.png'
      },
      'cactus':{
        'name':'Cactus Intranet',
        'text':'Cactus Intranet is an enterprise social network with features like real-time newsfeed, notifications, groups, events, polls, referral system etc. The system has role based permission system, allowing different stakeholders access and controls relevant to them.',
        'author':'QED42',
        'link':'http://www.qed42.com',
        'image':'/theme/assets/img/cactus.png'
      }
    };
    $scope.packages = {
      'gmap':{
        'name':'gmap',
        'text':'gmap lets you add geographical information to your applications objects',
        'author':'linnovate',
        'link':'http://www.qed42.com',
        'image':'/theme/assets/img/gmap.png'
      },
      'upload':{
        'name':'Upload',
        'text':'hello text',
        'author':'Linnovate',
        'link':'http://www.linnovate.net',
        'image':'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
      },
      'socket':{
        'name':'Socket',
        'text':'Socket.io support',
        'author':'Linnovate',
        'link':'http://www.linnovate.net',
        'image':'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
      }
    };

    $scope.$watch(function () {
      for (var i = 0; i < $scope.sites.length; i+=1) {
        if ($scope.sites[i].active) {
          return $scope.sites[i];
        }
      }
    }, function (currentSlide, previousSlide) {
      if (currentSlide !== previousSlide) {
        console.log('currentSlide:', currentSlide);
      }
    });
  }
]);
