var ctx = document.getElementById('sectoralChart');
var sectoralChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Agriculture', 'Industry', 'Mining', 'Others'],
    datasets: [
      {
        data: [419.2, 9741.23, 1967.28, 2.34,],
        backgroundColor: ['#2ecc71', '#27ae60', '#f1c40f', '#f39c12']
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
      text: 'Export for Each Government Strategic Sector',
      fontColor: '#2c3e50',
      fontSize: 16,
    }
  }
});