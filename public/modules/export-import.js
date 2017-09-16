angular.module('export-import', ['chart.js'])
  .directive('country', function() {
    return {
      template: 'directives/export-import/country.ejs'
    };
  })
  .directive('province', function() {
    return {
      templateUrl: '/directives/export-import/province.ejs'
    };
  })
  .directive('sectoral', function() {
    return {
      templateUrl: '/directives/export-import/sectoral.ejs'
    };
  })
  .directive('exportDevelopment', function() {
    return {
      templateUrl: '/directives/export-import/exportDevelopment.ejs'
    };
  }).directive('importDevelopment', function() {
    return {
      templateUrl: '/directives/export-import/importDevelopment.ejs'
    };
  });