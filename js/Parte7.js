"use strict";
var forma = document.getElementById("forma"),
        Entrada = ["potencia"],
        Salida = ["salidaPotencia,salidaResult"];
forma.addEventListener("submit", Generar, false);
function Generar(){
    var potencia = forma["potencia"].value;   
    var salida = forma["salidaPotencia"];
    var salid = forma["salidaResult"];
    for (var i = 0; i <= 10; i++) {
        salida.value = "\n";
        potencia += i;
       var mult = potencia;
       var result = 0;
        result = mult * i;
salida.value = potencia;
salid.value = result;
}
}

