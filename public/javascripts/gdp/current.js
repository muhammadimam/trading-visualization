var ctx = document.getElementById('currentChart');
var currentChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["QT1", "QT2", "QT3", "QT4"],
      datasets: [{
        label: 'Current Price',
        data: [2264, 2354, 2428, 2385],
          backgroundColor: '#3498db',
          borderColor: '#3498db',
          borderWidth: 1
      }]
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
      text: 'Current Price',
      fontColor: '#3498db',
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
          labelString: 'PDB (Billion Rp.)'
        },
        ticks: {
          beginAtZero: true,
          max: 2800,
          stepSize: 700
        }
      }]
    } 
  }
});