(function () {
  'use strict';

  angular.module('ResumeApp',['ngMaterial', 'ngMessages'])
  .constant('ApiPath', 'https://api.myjson.com/bins/dak40')
  .controller('ResumeAppController', ResumeAppController)
  .controller('RecommendationsController', RecommendationsController)
  .controller('SkillsController', SkillsController)
  .run(['$anchorScroll',
      function($anchorScroll) {
        $anchorScroll.yOffset = 56;   // always scroll by 50 extra pixels
      }])
  .controller('headerCtrl', ['$anchorScroll', '$location', '$scope',
      function($anchorScroll, $location, $scope) {
        $scope.gotoAnchor = function(x) {
          var newHash = 'section-' + x;

          if ($location.hash() !== newHash) {
            // set the $location.hash to `newHash` and
            // $anchorScroll will automatically scroll to it
            $location.hash('section-' + x);
          } else {
            // call $anchorScroll() explicitly,
            // since $location.hash hasn't changed
            $anchorScroll();
          }
        };
      }
    ]);

  ResumeAppController.$inject = ['$scope','$http', 'ApiPath'];
  function ResumeAppController($scope, $http, ApiPath) {
    $http.get(ApiPath).success(function(resume) {
      $scope.info = resume.my_info;
      $scope.about = resume.about_section;
      $scope.quote = resume.quote_section;
      $scope.education = resume.education_section;
      $scope.certificates = resume.certificates_section;

      $scope.experiences = resume.experience_section;
      $scope.data = {
        selectedIndex: 0
      };
      $scope.next = function() {
        $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
      };
      $scope.previous = function() {
        $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
      };
    });
  }

  RecommendationsController.$inject = ['$scope','$http', 'ApiPath'];
  function RecommendationsController($scope, $http, ApiPath) {
    var vm = this;
    $http.get(ApiPath).success(function(resume) {
      vm.recommendations = resume.recommendations_section;
    });
  }

  SkillsController.$inject = ['$scope','$http', 'ApiPath'];
  function SkillsController($scope, $http, ApiPath) {
    var vm2 = this;
    $http.get(ApiPath).success(function(skills) {
      vm2.skills = skills.skills_section;
    });
  }

})();
