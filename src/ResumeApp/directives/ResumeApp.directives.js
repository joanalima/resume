(function () {

  'use strict';

  angular.module('ResumeApp')
  .directive('resumeNavbar', ResumeNavbar)
  .directive('infoSection', InfoResumeSection)
  .directive('aboutSection', AboutResumeSection)
  .directive('quoteSection', QuoteResumeSection)
  .directive('experienceSection', ExperienceResumeSection)
  .directive('educationSection', EducationResumeSection)
  .directive('certificateSection', CertificateResumeSection)
  .directive('skillSection', SkillResumeSection)
  .directive('recommendationSection', RecommendationResumeSection)
  .directive('resumeFooter', ResumeFooter);


  function ResumeNavbar() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'src/ResumeApp/templates/navbar.template.html'
    };
    return ddo;
  }

  function InfoResumeSection(){
    var ddo = {
      restrict: 'E',
      templateUrl: 'src/ResumeApp/templates/info.template.html'
    };
    return ddo;
  }

  function AboutResumeSection() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'src/ResumeApp/templates/about.template.html'
    };
    return ddo;
  }

  function QuoteResumeSection() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'src/ResumeApp/templates/quote.template.html'
    };
    return ddo;
  }

  function EducationResumeSection() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'src/ResumeApp/templates/education.template.html'
    };
    return ddo;
  }

  function ExperienceResumeSection() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'src/ResumeApp/templates/experience.template.html'
    };
    return ddo;
  }

  function CertificateResumeSection() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'src/ResumeApp/templates/certificates.template.html'
    };
    return ddo;
  }

  function SkillResumeSection() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'src/ResumeApp/templates/skills.template.html'
    };
    return ddo;
  }

  function RecommendationResumeSection() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'src/ResumeApp/templates/recommendations.template.html'
    };
    return ddo;
  }

  function ResumeFooter() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'src/ResumeApp/templates/footer.template.html'
    };
    return ddo;
  }

})();
