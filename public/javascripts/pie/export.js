var ctx = document.getElementById('pieExportChart');
var pieExportChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['DKI Jakarta', 'Jawa Timur', 'Riau', 'Kalimantan Timur', 'Kepulauan Riau', 'Others'],
    datasets: [
      {
        data: [34, 13, 8, 7, 6, 32],
        backgroundColor: ['#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#e74c3c']
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
      text: 'Development of Non-Oil & Gas Export by Province',
      fontColor: '#2c3e50',
      fontSize: 16,
    }
  }
});