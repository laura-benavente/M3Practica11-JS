function mostrarFechaHora() {
    const fecha = new Date();
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const diaNombre = dias[fecha.getDay()];
    const dia = fecha.getDate();
    const mesNombre = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
    const horas = fecha.getHours();
    const minutos = String(fecha.getMinutes()).padStart(2, '0');

    const salida = `Hoy es ${diaNombre}, ${dia} de ${mesNombre} de ${año}, y son las ${horas}:${minutos} horas.`;
    
    document.getElementById('fechaHora').innerText = salida;
}
