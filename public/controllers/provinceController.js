angular.module('export-import')
  .controller('provinceController', ['$scope', function($scope) {
    var DKIJakarta = [
      [62, 88, 66, 62, 63], //Export Oil & Gas
      [48061, 47309, 48012, 46328, 45964], //Export Non-Oil & Gas
      [4065, 3965, 3904, 2384, 1687], //Import Oil & Gas
      [92859, 86142, 80700, 68784, 69759]  //Import Non-Oil & Gas
    ];

    var JawaTimur = [
      [725,	507, 740, 624, 1008], //Export Oil & Gas
      [15524,	15055, 17983,	16496, 17944], //Export Non-Oil & Gas
      [6736, 6827, 7301, 3630, 2941], //Import Oil & Gas
      [17741,	18218, 17908,	15653, 15652]  //Import Non-Oil & Gas
    ];

    var KalimantanTimur = [
      [14994,	12843, 10731, 6414, 3781], //Export Oil & Gas
      [17796,	17001, 14236, 11069, 10072], //Export Non-Oil & Gas
      [5284, 7139, 6912, 4136, 2613], //Import Oil & Gas
      [2783, 2268, 1509, 1369, 1098]  //Import Non-Oil & Gas
    ];

    var Riau = [
      [6556, 5895, 5191, 3530, 2478], //Export Oil & Gas
      [12588, 11661, 12057, 10843, 11232], //Export Non-Oil & Gas
      [461, 424, 299, 271, 234], //Import Oil & Gas
      [1800, 1547, 1417, 1069, 1068]  //Import Non-Oil & Gas
    ];
    
    var JawaBarat = [
      [841, 410, 1030, 712, 461], //Export Oil & Gas
      [279, 274, 246, 26, 73], //Export Non-Oil & Gas
      [2384, 2437, 1820, 922, 833], //Import Oil & Gas
      [22, 97, 22, 920, 1213]  //Import Non-Oil & Gas
    ];

    $scope.provinceName = 'DKI Jakarta';
    $scope.exportData = [DKIJakarta[0], DKIJakarta[1]];
    $scope.importData = [DKIJakarta[2], DKIJakarta[3]];

    $scope.changeData = function() {
      $scope.exportData.length = 0;
      $scope.importData.length = 0;

      var name = $scope.provinceName;
      if (name == 'DKI Jakarta') {
        $scope.exportData.push(DKIJakarta[0], DKIJakarta[1]);
        $scope.importData.push(DKIJakarta[2], DKIJakarta[3]);
      }
      else if (name == 'Jawa Timur') {
        $scope.exportData.push(JawaTimur[0], JawaTimur[1]);
        $scope.importData.push(JawaTimur[2], JawaTimur[3]);
      } 
      else if (name == 'Kalimantan Timur') {
        $scope.exportData.push(KalimantanTimur[0], KalimantanTimur[1]);
        $scope.importData.push(KalimantanTimur[2], KalimantanTimur[3]);
      }
      else if (name == 'Riau') {
        $scope.exportData.push(Riau[0], Riau[1]);
        $scope.importData.push(Riau[2], Riau[3]);
      }
      else if (name == 'Jawa Barat') {
        $scope.exportData.push(JawaBarat[0], JawaBarat[1]);
        $scope.importData.push(JawaBarat[2], JawaBarat[3]);
      }
    };

    $scope.labels = ['2012', '2013', '2014', '2015', '2016'];
    $scope.datasetOverride = [
      {
        label: 'Oil and Gas',
        type: 'line',        
        borderColor: '#9b59b6',
        backgroundColor: '#9b59b6',
        pointBackgroundColor: '#9b59b6',
        pointBorderColor: '#9b59b6',
        pointHoverBorderColor: '#9b59b6',
        pointHoverBackgroundColor: '#9b59b6',
        fill: false,
        pointRadius: 3
      },
      {
        label: 'Non-Oil and Gas',
        type: 'line',        
        borderColor: '#3498db',
        backgroundColor: '#3498db',
        pointBorderColor: '#3498db',
        pointBackgroundColor: '#3498db',
        pointHoverBorderColor: '#3498db',
        pointHoverBackgroundColor: '#3498db',
        fill: false,
        pointRadius: 3  
      }
    ];
    $scope.options = { 
      legend: { 
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true
        }
      },
      elements: {
        line: {
          tension: 0
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 6
          }
        }]
      }    
    };
  }]);