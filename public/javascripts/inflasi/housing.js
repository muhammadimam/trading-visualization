var ctx = document.getElementById('housingChart');
var housingChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
    datasets: [
      {
        label: 'Housing',
        data: [1.09, 0.75, 0.3, 0.93, 0.35, 0.75],
        borderColor: '#f39c12',
        backgroundColor: '#f39c12',
        pointBackgroundColor: '#f39c12',
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
      fontColor: '#f39c12',
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