var ctx = document.getElementById('generalChart');
var generalChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'General',
        data: [0.97, 0.23, -0.02, 0.09, 0.39, 0.69],
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
      text: 'General',
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