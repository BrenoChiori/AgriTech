const financeChart = document.getElementById('myChart-Finance');

new Chart(financeChart, {
  type: 'doughnut',
  data: {
    labels: [
      'Venda de grãos',
      'Pecuária',
    ],
    datasets: [{
      label: 'Principal fonte de renda',
      data: [1272592.22, 678256.92],
      backgroundColor: [
        'rgb(72, 183, 96)',
        'rgb(255, 205, 86)'
      ]
    }],
    hoverOffset: 4
  },
  options: {
    responsive: false
  }
})

const ctxestoqueAnimals = document.getElementById('myChart-Finance-Year');

new Chart(ctxestoqueAnimals, {
  type: 'scatter',
  data: {
    labels: [
        'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    datasets: [
      {
        type: 'line',
        label: 'Gastos do mês',
        data: [180000, 187000, 197000, 250000, 340000, 275000, 290000, 295000, 265000, 240000, 230000, 200000],
        fill: false,
        borderColor: 'rgba(255, 205, 86, 20.0)'
      }, {
        type: 'bar',
        label: 'Faturamento',
        data: [321000, 270000, 320000, 470000, 512000, 465000, 411000, 370000, 320000, 305000, 310000, 390000],
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

const spentChart = document.getElementById('myChart-Spent');

new Chart(spentChart, {
  type: 'pie',
  data: {
    labels: [
      'Plantações',
      'Animais',
      'Funcionários',
      'Maquinário',
      'Alugueis',
      'Outros'
    ],
    datasets: [{
      label: 'Principais Gastos',
      data: [720592.22, 378256.92, 62592.22, 272592.22, 52592.22, 22592.22,],
      backgroundColor: [
        'rgb(255, 205, 86)',
        'rgb(72, 183, 96)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
        'rgb(201, 203, 207)',
      ]
    }],
    hoverOffset: 4
  },
  options: {
    responsive: false
  }
})