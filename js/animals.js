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
      data: [236954.15, 141302.76, 141302.76],
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

const financeChart = document.getElementById('myChart-Finance');

new Chart(financeChart, {
  type: 'doughnut',
  data: {
    labels: [
      'Gado para corte',
      'Ave para corte',
      'Suino para corte',
      'Leite',
      'Ovos',
    ],
    datasets: [{
      label: 'Principal fonte de renda',
      data: [1272592.22, 378256.92, 378256.92, 378256.92, 378256.92],
      backgroundColor: [
        'rgb(72, 183, 96)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
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