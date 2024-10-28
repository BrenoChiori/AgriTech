const siloChart = document.getElementById('myChart-Plant');

new Chart(siloChart, {
  type: 'bar',
  data: {
    labels: ['Sojá', 'Milho', 'Cana', 'Trigo'],
    datasets: [{
      label: 'Grãos armazenados no sílo',
      backgroundColor: [
        'rgb(72, 183, 96)'
      ],
      data: [320000, 133000, 50000, 280000, 3],
      borderWidth: 1
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

const quoteChart = document.getElementById('myChart-Cotacao');

new Chart(quoteChart, {
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
    datasets: [{
      type: 'line',
      label: 'Sojá',
      data: [157.70, 156.60, 156.00, 156.30, 158.10, 160.80, 161.30, 162.10, 162.00, 160.80, 161.30, 161.90],
      fill: false,
      borderColor: 'rgb(72, 183, 96)',
      tension: 0.1
    },
    {
      type: 'line',
      label: 'Milho',
      data: [159.70, 160.80, 161.10, 161.90, 162.00, 161.20, 160.00, 160.50, 159.70, 159.70, 158.50, 159.50],
      fill: false,
      borderColor: 'rgb(54, 162, 235)',
      tension: 0.1
    },
    {
      type: 'line',
      label: 'Cana-de-Açucar',
      data: [158.70, 158.80, 158.10, 159.90, 159.00, 160.20, 159.80, 160.20, 161.70, 161.50, 161.70, 162.50],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
      type: 'line',
      label: 'Trigo',
      data: [161.70, 161.80, 162.10, 161.20, 161.90, 161.90, 162.10, 161.20, 160.70, 159.50, 159.70, 159.30],
      fill: false,
      borderColor: 'rgb(255, 205, 86)',

      tension: 0.1
    }
    ]
  }
})

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
      data: [1272592.22, 378256.92],
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

const animalChart = document.getElementById('myChart-Animals');

new Chart(animalChart, {
  type: 'pie',
  data: {
    labels: [
      'Bovinos',
      'Aves',
      'Suínos'
    ],
    datasets: [{
      label: 'Principal fonte de renda',
      data: [236954.15, 141302.76, 97302.76],
      backgroundColor: [
        'rgb(72, 183, 96)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)'
      ]
    }],
    hoverOffset: 4
  },
  options: {
    responsive: false
  }
})

document.addEventListener('DOMContentLoaded', function () {
  let calendarEl = document.getElementById('calendar');
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    events: [
      {
        title: 'Limpar tratores',
        start: '2024-06-10'
      },
      {
        title: 'Revisar estoque',
        start: '2024-06-10'
      },
      {
        title: 'Vacinar rebanho',
        start: '2024-06-11'
      },
      {
        title: 'Organizar maquinario',
        start: '2024-06-11'
      },
      {
        title: 'Tirar leite',
        start: '2024-06-12'
      },
      {
        title: 'Vender Sojá',
        start: '2024-06-12'
      },
      {
        title: 'Limpar tratores',
        start: '2024-06-18'
      },
      {
        title: 'Revisar estoque',
        start: '2024-06-18'
      },
      {
        title: 'Vacinar rebanho',
        start: '2024-06-19'
      },
      {
        title: 'Organizar maquinario',
        start: '2024-06-19'
      },
      {
        title: 'Tirar leite',
        start: '2024-06-20'
      },
      {
        title: 'Vender Sojá',
        start: '2024-06-20'
      },
    ]
  });
  calendar.render();
});

const ctxestoque = document.getElementById('myChart-Estoque');

new Chart(ctxestoque, {
  type: 'scatter',
  data: {
    labels: ['Sementes', 'Fertilizantes', 'Agrotóxicos', 'Rações'],
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
        data: [120, 56, 38, 83],
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