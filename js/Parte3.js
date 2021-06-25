"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});
var FMT_NUMERO = "$0,0.00",
        forma = document.getElementById("forma"),
        s1 = document.getElementById("salida1"),
        s2 = document.getElementById("salida2"),
        resultado = document.getElementById("resultado");
var forma = document.getElementById("forma"),
        entrada = ["numerouno", "numerodos","suma","resta","multi","divi","a","b"],
        salidas = ["salidaNumerouno", "salidaNumerodos","salidaSuma"];
forma.addEventListener("submit", procesa, false);
function procesa (){
    var numerouno = forma["numerouno"].value;
    var salida = forma["salidaNumerouno"];
    var ini = "Numero1: $" + numerouno;
    salida.value = ini;
    
var numerodos = forma["numerodos"].value;
var salida = forma["salidaNumerodos"];
var inic = ",Numero2: $" + numerodos;
salida.value = inic;

var num1 = forma["numerouno"].value;
var num2 = forma["numerodos"].value;
var res = parseInt(num1) + parseInt(num2);
var salida = forma["salidaSuma"];
res = numeral(res).format(FMT_NUMERO);
var pant = "La suma de " + num1 + "+" + num2 + "= " + res;
salida.value = pant;

/*SUMA*/var num1 = forma["numerouno"].value;
var num2 = forma["numerodos"].value;
var resp = num1 -num2;var salida = forma["salidaResta"];
resp = numeral(resp).format(FMT_NUMERO);
var panta = "La resta de " + num1 + "-" + num2 + "= " + resp;
salida.value = panta;

/*RESTA*/var num1 = forma["numerouno"].value;
var num2 = forma["numerodos"].value;
var respu = num1 * num2;
if(respu === 0){
    var salida = forma["salidaMulti"]; 
var respu = "Error, toda multiplicacion que sea por 0 dara 0";
salida.value = respu;
}else{
    var salida = forma["salidaMulti"];
    respu = numeral(respu).format(FMT_NUMERO);
    var panta = "La multiplicacion de " + num1 + "*" + num2 + "= " + respu;
    salida.value = panta;}

/*MULTIPLICACION*/var num1 = forma["numerouno"].value;
var num2 = forma["numerodos"].value;
var respue = num1 / num2;
if(respue === 0){var salida = forma["salidaDivi"];
    var respue = "Error, no se puede tener un divisor como 0";
    salida.value = respue;}
else{var salida = forma["salidaDivi"];
    respue = numeral(respue).format(FMT_NUMERO);
    var pantal= "La division de " + num1 + "/" + num2 + "= " + respue;salida.value = pantal;
}
}