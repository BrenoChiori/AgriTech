document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'pt-br',
      events: [
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

const machineryChart = document.getElementById('myChart-Machinery');

new Chart(machineryChart, {
  type: 'bar',
  data: {
    labels: ['0 - 3k', '3k - 5k', '5k - 9k', '9k +'],
    datasets: [{
      label: 'Em R$',
      backgroundColor: [
        'rgb(72, 183, 96)'
      ],
      data: [4, 3, 5, 2],
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

const animalChart = document.getElementById('myChart-Animals');

new Chart(animalChart, {
  type: 'pie',
  data: {
    labels: [
      'Administrativo',
      'Financeiro',
      'Campo',
      'Pesquisa'
    ],
    datasets: [{
      label: 'Funcionários',
      data: [4, 2, 5, 2],
      backgroundColor: [
        'rgb(72, 183, 96)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',

      ]
    }],
    hoverOffset: 4
  },
  options: {
    responsive: false
  }
})

const financeChart = document.getElementById('myChart-Finance');

new Chart(financeChart, {
  type: 'doughnut',
  data: {
    labels: [
      'Homem',
      'Mulher',
    ],
    datasets: [{
      label: 'Funcionários',
      data: [10, 4],
      backgroundColor: [
        'rgb(72, 183, 96)',
        'rgb(255, 205, 86)',
      ]
    }],
    hoverOffset: 4
  },
  options: {
    responsive: false
  }
})