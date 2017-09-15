var ctx = document.getElementById('transportationChart');
var transportationChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
    datasets: [
      {
        label: 'Transportation',
        data: [2.35, 0.15, -0.13, 0.27, 0.23, 1.27],
        borderColor: '#34495e',
        backgroundColor: '#34495e',
        pointBackgroundColor: '#34495e',
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
      text: 'Transportation',
      fontColor: '#34495e',
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
          labelString: 'Inflasi (%)'
        },
        ticks: {
          min: -1.5,
          max: 2.5,
          stepSize: 1
        }
      }]
    } 
  }
});