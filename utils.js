export async function obtenerDatos() {
    const datos = await fetch('https://api.covidtracking.com/v2/us/daily.json').then(respuesta => respuesta.json())
    return datos
}
