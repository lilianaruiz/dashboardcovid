import { obtenerDatos } from "./utils.js";

const datos = await obtenerDatos()
console.log('datos')
console.log(datos)

const fechas = datos.data.splice(0,7) 
console.log(fechas)

const ctxg1 = document.getElementById('grafico1').getContext('2d');
const ctxg2 = document.getElementById('grafico2').getContext('2d');

const myChart = new Chart(ctxg1, {
    type: 'doughnut',
    data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(121, 200, 206)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
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

const labels = fechas.map((fecha)=>{
    return fecha.date
});

const casos = fechas.map((caso)=>{
    return caso.cases.total.value
});


const data = {
  labels: labels,
  datasets: [{
    label: 'Casos Positivos Primer Semana Marzo',
    data: casos,
    fill: true,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
}

const myChart2 = new Chart(ctxg2, {
    type: 'line',
    data: data,
});

