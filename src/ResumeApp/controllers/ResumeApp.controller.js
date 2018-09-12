(function () {
  'use strict';

  angular.module('ResumeApp')
  .constant('ApiPath', "../../../../libs/json/jlresumeinfo.json")
  .controller('ResumeAppController', ResumeAppController);

  ResumeAppController.$inject = ['$scope','$http', 'ApiPath'];
  function ResumeAppController($scope, $http, ApiPath) {
    
    $http.get(ApiPath).success(function(resume) {
      $scope.info = resume.my_info;
      $scope.about = resume.about_section;
      $scope.quote = resume.quote_section;

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

      $scope.education = resume.education_section;
      $scope.certificates = resume.certificates_section;

    });
  }
})();
