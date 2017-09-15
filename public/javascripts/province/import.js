var ctx = document.getElementById('provinceImportChart');
var provinceImportChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2012', '2013', '2014', '2015', '2016'],
    datasets: [
      {
        label: 'Oil & Gas',
        data: [4065, 3965, 3904, 2384, 1687],
        borderColor: '#9b59b6',
        backgroundColor: '#9b59b6',
        pointBackgroundColor: '#9b59b6',
        fill: false
      },
      {
        label: 'Non-Oil & Gas',
        data: [92859, 86142, 80700, 68784, 69759],
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
          max: 95000,
          stepSize: 23750
        }
      }]
    } 
  }
});