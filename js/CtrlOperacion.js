var forma = document.getElementById("forma"),
        entradas = ["num1, num2"],
        salidas = ["outSalida"],
        txtFecha = forma["fecha"],salidaFecha = document.getElementById("salidaFecha"),
        MiFecha;

forma.addEventListener("submit", Ejecuta, false);

function Ejecuta() {
    
  var fecha = new Date (txtFecha.value);
    MiFecha = (fecha.getDate()+1) + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
    salidaFecha.textContent = MiFecha;
    salidaFecha.textContent = "Fecha: " + MiFecha;
    
    }

