const ctxestoqueMachine = document.getElementById('myChart-Estoque-Machine');

new Chart(ctxestoqueMachine, {
  type: 'scatter',
  data: {
    labels: ['Oléo', 'Lumbrificantes', 'Combustivel', 'Fluido de freio'],
    datasets: [
      {
        type: 'line',
        label: 'Aviso de itens abaixo do estoque',
        data: [50, 50, 50, 50],
        fill: false,
        borderColor: 'rgba(255, 205, 86, 20.0)'
      }, {
        type: 'bar',
        label: 'Fluidos para maquinários (Paletes em 100L)',
        data: [120, 56, 38, 83, 70],
        borderWidth: 1.5,
        borderColor: 'rgb(72, 183, 96)',
        backgroundColor: 'rgba(72, 183, 96, 0.3)'
      }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});