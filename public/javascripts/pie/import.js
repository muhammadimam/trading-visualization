var ctx = document.getElementById('pieImportChart');
var pieImportChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['DKI Jakarta', 'Jawa Timur', 'Banten', 'Kepulauan Riau', 'Jawa Tengah', 'Others'],
    datasets: [
      {
        data: [59, 13, 5, 5, 4, 14],
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
      text: 'Development of Non-Oil & Gas Import by Province',
      fontColor: '#2c3e50',
      fontSize: 16,
    }
  }
});