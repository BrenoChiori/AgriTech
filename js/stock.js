const ctxestoquePlantations = document.getElementById('myChart-Estoque-Plantations');

new Chart(ctxestoquePlantations, {
  type: 'scatter',
  data: {
    labels: ['Sementes', 'Fertilizantes', 'Agrotóxicos', 'Calcio'],
    datasets: [
      {
        type: 'line',
        label: 'Aviso de itens abaixo do estoque',
        data: [50, 50, 50, 50],
        fill: false,
        borderColor: 'rgba(255, 205, 86, 20.0)'
      }, {
        type: 'bar',
        label: 'Insumos Agrícolas (Sacos em 100kg)',
        data: [127, 36, 98, 63],
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

const ctxestoqueAnimals = document.getElementById('myChart-Estoque-Animals');

new Chart(ctxestoqueAnimals, {
  type: 'scatter',
  data: {
    labels: ['Ração Gado', 'Ração Aves', 'Ração Suinos', 'Suplemento'],
    datasets: [
      {
        type: 'line',
        label: 'Aviso de itens abaixo do estoque',
        data: [50, 50, 50, 50],
        fill: false,
        borderColor: 'rgba(255, 205, 86, 20.0)'
      }, {
        type: 'bar',
        label: 'Insumos Pecuarios (Sacos em 100kg)',
        data: [56, 110, 98, 73],
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

const ctxestoqueMachine = document.getElementById('myChart-Estoque-Machine');

new Chart(ctxestoqueMachine, {
  type: 'scatter',
  data: {
    labels: ['Oléo', 'Lumbrificantes', 'Combustível', 'Fluido de freio'],
    datasets: [
      {
        type: 'line',
        label: 'Aviso de itens abaixo do estoque',
        data: [30, 30, 30, 30],
        fill: false,
        borderColor: 'rgba(255, 205, 86, 20.0)'
      }, {
        type: 'bar',
        label: 'Fluidos para maquinários (Paletes em 100L)',
        data: [70, 36, 18, 53],
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