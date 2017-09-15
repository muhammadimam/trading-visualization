var ctx = document.getElementById('constantChart');
var constantChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["QT1", "QT2", "QT3", "QT4"],
      datasets: [{
        label: 'Constant Price',
        data: [2931, 3075, 3205, 3194],
          backgroundColor: '#9b59b6',
          borderColor: '#9b59b6',
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
      text: 'Constant Price',
      fontColor: '#9b59b6',
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
          max: 3600,
          stepSize: 900
        }
      }]
    } 
  }
});