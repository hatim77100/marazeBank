const data = {
    labels: ['Dépot', 'Retrait', 'inscription', 'Découvert'],
    datasets: [{
      label: 'MAZ-22',
      data: [300, 200, 100,50],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(225, 46, 211 )'
        ],
      borderColor: 'rgb(157, 46, 225)',
    }]
  };
  
const config = {
    type: 'doughnut',
    data: data,
    options: {
      animations: {
        tension: {
          duration: 2000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
    }
  };

const chart = () => {
    const elem = new Chart(document.getElementById("myChart"), config) ;
    return elem;
}

export default chart();