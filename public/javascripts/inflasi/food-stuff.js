var ctx = document.getElementById('foodStuffChart');
var foodStuffChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
    datasets: [
      {
        label: 'Food Stuff',
        data: [0.66, -0.31, -0.66, -1.13, 0.86, 0.69],
        borderColor: '#e74c3c',
        backgroundColor: '#e74c3c',
        pointBackgroundColor: '#e74c3c',
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
      text: 'Food Stuff',
      fontColor: '#e74c3c',
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