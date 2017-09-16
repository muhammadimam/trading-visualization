angular.module('export-import')
  .controller('countryController', ['$scope', function($scope) {
    var UnitedStates = [
      [283,	609, 673, 932, 456], //Export Oil & Gas
      [14590, 15081, 15856, 15308, 15684], //Export Non-Oil & Gas
      [133,	191, 67, 42, 91], //Import Oil & Gas
      [11468,	8873,	8102,	7550,	7206]  //Import Non-Oil & Gas
    ];

    var China = [
      [795,	1319,	1146,	1785,	1672], //Export Oil & Gas
      [20864,	21281, 16459,	13260, 15118], //Export Non-Oil & Gas
      [423,	279, 162,	186, 110], //Import Oil & Gas
      [28961,	29570, 30461,	29224, 30689]  //Import Non-Oil & Gas
    ];

    var Japan = [
      [12903,	11002, 8551, 4924, 2889], //Export Oil & Gas
      [17231,	16084, 14565, 13096, 13209], //Export Non-Oil & Gas
      [46, 230, 69, 30, 58], //Import Oil & Gas
      [22721, 19054, 16938, 13232, 12926]  //Import Non-Oil & Gas
    ];

    var India = [
      [49, 21, 25, 129, 169], //Export Oil & Gas
      [12446, 13009, 12223, 11601, 9934], //Export Non-Oil & Gas
      [289, 194, 388, 75, 29], //Import Oil & Gas
      [4016, 3769, 3563, 2665, 2843]  //Import Non-Oil & Gas
    ];
    
    var Singapore = [
      [6584, 6300, 6662, 3971, 2520], //Export Oil & Gas
      [10550, 10385, 10065, 8661, 9340], //Export Non-Oil & Gas
      [15449, 15422, 15035, 9047, 6887], //Import Oil & Gas
      [10637, 10158, 10150, 8975, 7661]  //Import Non-Oil & Gas
    ];

    var Malaysia = [
      [2809, 3398, 3332, 1403, 1098], //Export Oil & Gas
      [8469, 7268, 6397, 6227, 6027], //Export Non-Oil & Gas
      [5922, 7393, 5076, 3551, 2469], //Import Oil & Gas
      [6321, 5929, 5778, 4979, 4731]  //Import Non-Oil & Gas
    ];

    $scope.countryName = 'United States';
    $scope.exportData = [UnitedStates[0], UnitedStates[1]];
    $scope.importData = [UnitedStates[2], UnitedStates[3]];

    $scope.changeData = function() {
      $scope.exportData.length = 0;
      $scope.importData.length = 0;

      var name = $scope.countryName;
      if (name == 'United States') {
        $scope.exportData.push(UnitedStates[0], UnitedStates[1]);
        $scope.importData.push(UnitedStates[2], UnitedStates[3]);
      }
      else if (name == 'China') {
        $scope.exportData.push(China[0], China[1]);
        $scope.importData.push(China[2], China[3]);
      } 
      else if (name == 'Japan') {
        $scope.exportData.push(Japan[0], Japan[1]);
        $scope.importData.push(Japan[2], Japan[3]);
      }
      else if (name == 'India') {
        $scope.exportData.push(India[0], India[1]);
        $scope.importData.push(India[2], India[3]);
      }
      else if (name == 'Singapore') {
        $scope.exportData.push(Singapore[0], Singapore[1]);
        $scope.importData.push(Singapore[2], Singapore[3]);
      }      
      else if (name == 'Malaysia') {
        $scope.exportData.push(Malaysia[0], Malaysia[1]);
        $scope.importData.push(Malaysia[2], Malaysia[3]);
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