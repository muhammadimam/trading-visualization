angular.module('indikator-ekonomi', [])
  .directive('inflation', function() {
    return {
      templateUrl: '/directives/inflasi.ejs'
    };
  })
  .directive('exchangeRates', function() {
    return {
      template: 'Exchange Rates'
    };
  })
  .directive('grossDomesticProduct', function() {
    return {
      template: 'Gross Domestic Product'
    };
  })
  .directive('balanceOfTrade', function() {
    return {
      template: 'Balance of Trade'
    };
  });