"use strict";
var forma = document.getElementById("forma"),
        entrada = ["nombre", "secreto", "navegador", "email", "usuario", "url", "telefono", "verso"],
        salidas = ["salidaNombre", "salidaSecreto", "salidaNavegador", "salidaEmail", "salidaUsuario", "salidaUrl", "salidaTelefono", "salidaVerso" ];
forma.addEventListener("submit", procesa, false);
function procesa (){
    var nombre = forma["nombre"].value;
    var salida = forma["salidaNombre"];
    salida.value = "Tu nombre es: " + nombre;
    
    var secreto = forma["secreto"].value;
    var salida = forma["salidaSecreto"];
    salida.value = "Tu contraseña es: " + secreto;
    
    var navegador = forma["navegador"].value;
    var salida = forma["salidaNavegador"];
    salida.value = "Tu navegador de confianza es: " + navegador;
    
    var email = forma["email"].value;
    var salida = forma["salidaEmail"];
    salida.value = "Tu email es: " + email;
    
    var usuario = forma["usuario"].value;
    var salida = forma["salidaUsuario"];
    salida.value = "Tu usuario es: " + usuario;
    
    var url = forma["url"].value;
    var salida = forma["salidaUrl"];
    salida.value = "Tu url de preferencia es: " + url;
    
    var telefono = forma["telefono"].value;
    var salida = forma["salidaTelefono"];
    salida.value = "Tu numero telefonico es: " + telefono;
    
    var verso = forma["verso"].value;
    var salida = forma["salidaVerso"];
    salida.value = "Tu verso ingresado es: " + verso;
}