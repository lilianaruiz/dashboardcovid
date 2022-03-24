import { obtenerDatos } from "./utils.js";

const datos = await obtenerDatos()
console.log('datos')
console.log(datos)

const fechas = datos.data.splice(0,7) 
console.log(fechas)

const ctxg1 = document.getElementById('grafico1').getContext('2d');
const ctxg2 = document.getElementById('grafico2').getContext('2d');

const ppositivo = document.getElementById('positivos')
const positivos = fechas[0].cases.total.value
ppositivo.innerText = positivos

const ppruebas = document.getElementById('pruebas')
const pruebas = fechas[0].testing.total.value
ppruebas.innerText = pruebas

const pmuertes = document.getElementById('muertes')
const muertes = fechas[0].outcomes.death.total.value
pmuertes.innerText = muertes

const hospitalizados = fechas[0].outcomes.hospitalized
console.log ("host",hospitalizados)
const actuales = hospitalizados.currently.value
const cuidadosint = hospitalizados.in_icu.currently.value
const ventilador = hospitalizados.on_ventilator.currently.value

const myChart = new Chart(ctxg1, {
    type: 'doughnut',
    data: {
        labels: [
          'Actuales',
          'Cuidados Intencivos',
          'Con Respirador'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [actuales,cuidadosint,ventilador],
          backgroundColor: [
            'rgb(121, 200, 206)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
    },
    
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

