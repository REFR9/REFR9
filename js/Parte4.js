"use strict";
var forma = document.getElementById("forma"),
        txtFecha = forma["fecha"],
        txtHora = forma["hora"],
        txtFechaYHoraLocal = forma["fechaYHoraLocal"],
        txtSemana = forma["semana"],
        txtMes = forma["mes"],
        salidaFecha = document.getElementById("salidaFecha"),
        salidaHora = document.getElementById("salidaHora"),
        salidaFechaYHoraLocal = document.getElementById("salidaFechaYHoraLocal"),
        salidaSemana = document.getElementById("salidaSemana"),
        salidaMes = document.getElementById("salidaMes");
function procesa(){
    var fechaValueAsDate = txtFecha.valueAsDate,
            fecha = new Date (txtFecha.value),
            hora = new Date ("1970-01-01T" + txtHora.value),
            fechaYHoraLocal = new Date (txtFechaYHoraLocal.value + "-06:00"),
            semana = txtSemana.valueAsDate,mes = txtMes.valueAsDate;
salidaFecha.textContent = txtFecha.type + " | " + fecha.toLocaleDateString() + "|"+fecha.toUTCString() +(fechaValueAsDate ? "|valueAsDate: " + fechaValueAsDate.toUTCString(): "");
salidaHora.textContent = txtHora.type + " | " + txtHora.value + " | " +hora.toISOString();

salidaFechaYHoraLocal.textContent = txtFechaYHoraLocal.type + " | " + fechaYHoraLocal.toUTCString() + "|" +fechaYHoraLocal.toLocaleString();
salidaSemana.textContent = txtSemana.type + " | " + txtSemana.value +(semana ? "|" + semana.toISOString():"");
salidaMes.textContent = txtMes.type + " | " + txtMes.value +(mes ? "|" + mes.toISOString():"");
}

