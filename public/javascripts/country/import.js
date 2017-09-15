var ctx = document.getElementById('countryImportChart');
var countryImportChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2012', '2013', '2014', '2015', '2016'],
    datasets: [
      {
        label: 'Oil & Gas',
        data: [5922, 7393, 5076, 3551, 2469],
        borderColor: '#9b59b6',
        backgroundColor: '#9b59b6',
        pointBackgroundColor: '#9b59b6',
        fill: false
      },
      {
        label: 'Non-Oil & Gas',
        data: [6321, 5929, 5778, 4979, 4731],
        borderColor: '#3498db',
        backgroundColor: '#3498db',
        pointBackgroundColor: '#3498db',
        fill: false
      }
    ]
  },
  options: {
    legend: { 
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: true
      }
    },
    title: {
      display: true,
      text: 'Oil & Gas and Non-Oil & Gas Import',
      fontColor: '#2c3e50',
      fontSize: 16,
    },
    elements: {
      line: {
        tension: 0
      }
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Import (Million US$)'
        },
        ticks: {
          beginAtZero: true,
          max: 8000,
          stepSize: 2000
        }
      }]
    } 
  }
});