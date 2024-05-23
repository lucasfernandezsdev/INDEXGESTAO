const ctx1 = document.getElementById("arrecadacao");
Chart.defaults.color = "#fff";
Chart.defaults.borderColor = "#fff";
Chart.defaults.backgroundColor = "#fff";


new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["GAS", "ENERGIA", "AGUA", "FUNDO", "COTA"],
    datasets: [
      {
        label: "COMPOSIÇÃO DAS ARRECADAÇÕES",
        data: [100, 200, 300, 400, 500],
        borderWidth: 1,
        backgroundColor: 'rgba(255,255,255,255)',
            borderColor: 'rgba(153, 102, 255, 1)',
          },
        ],
      },
      options: {
        indexAxis: "y",
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              font: {
                size: 16 // Tamanho da fonte dos labels da legenda
              }
            }
          }
        }
      },
    });

const response = await fetch("",{
  method: "GET",
  headers: {
    "Content-Type":"",
    "access_token":""
  }
})
const data = await response.json()
