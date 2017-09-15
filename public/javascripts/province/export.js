var ctx = document.getElementById('provinceExportChart');
var provinceExportChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2012', '2013', '2014', '2015', '2016'],
    datasets: [
      {
        label: 'Oil & Gas',
        data: [62, 88, 66, 62, 63],
        borderColor: '#9b59b6',
        backgroundColor: '#9b59b6',
        pointBackgroundColor: '#9b59b6',
        fill: false
      },
      {
        label: 'Non-Oil & Gas',
        data: [48061, 47309, 48012, 46328, 45964],
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
          max: 50000,
          stepSize: 12500
        }
      }]
    } 
  }
});