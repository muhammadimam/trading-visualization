var ctx = document.getElementById('countryExportChart');
var countryExportChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2012', '2013', '2014', '2015', '2016'],
    datasets: [
      {
        label: 'Oil & Gas',
        data: [2809, 3398, 3332, 1403, 1098],
        borderColor: '#9b59b6',
        backgroundColor: '#9b59b6',
        pointBackgroundColor: '#9b59b6',
        fill: false
      },
      {
        label: 'Non-Oil & Gas',
        data: [8469, 7268, 6397, 6227, 6027],
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
      text: 'Oil & Gas and Non-Oil & Gas Export',
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
          labelString: 'Export (Million US$)'
        },
        ticks: {
          beginAtZero: true,
          max: 9000,
          stepSize: 2250
        }
      }]
    } 
  }
});