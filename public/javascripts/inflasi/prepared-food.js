var ctx = document.getElementById('preparedFoodChart');
var preparedFoodChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
    datasets: [
      {
        label: 'Prepared Food',
        data: [0.47, -0.39, 0.31, 0.12, 0.38, 0.39],
        borderColor: '#e67e22',
        backgroundColor: '#e67e22',
        pointBackgroundColor: '#e67e22',
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
      text: 'Prepared Food',
      fontColor: '#e67e22',
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