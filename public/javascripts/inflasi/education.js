var ctx = document.getElementById('educationChart');
var educationChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
    datasets: [
      {
        label: 'Education',
        data: [0.12, 0.08, 0.08, 0.03, 0.03, 0.07],
        borderColor: '#2ecc71',
        backgroundColor: '#2ecc71',
        pointBackgroundColor: '#2ecc71',
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
      text: 'Education',
      fontColor: '#2ecc71',
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
          min: -2,
          max: 2,
          stepSize: 1
        }
      }]
    } 
  }
});