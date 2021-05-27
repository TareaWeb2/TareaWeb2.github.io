"Use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});

var FMT_NUMERO = "$ 0,0.00",
    forma = document.getElementById("forma"),
    s1 = document.getElementById("salida1"),
    s2 = document.getElementById("salida2"),
    resultado = document.getElementById("resultado"); 
 
function validarNumeros(event){
    if((event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46)
        return true;
    else
        return false; 
}
 
function procesa(){
    var N1 = forma["N1"].valueAsNumber ? forma["N1"].valueAsNumber : parseInt(forma["N1"].value),
            N2 = forma["N2"].valueAsNumber ? forma["N2"].valueAsNumber : parseInt(forma["N2"].value),
            error = false;
    if (isNaN(N1)){
        error = true;
        s1.value = "Incorrecto";
 }
 
 if (isNaN(N2)){
     error = true;
     s2.value = "Incorrecto";
 }
 
 if (!error){
     var sum = N1 + N2,
             rest = N1 - N2,
             mult = N1 * N2,
             div = '';
     if(N2 == 0)
         div = "Es una división entre cero";
     else
 {
     div = N1 / N2;
     div = numeral(div).format(FMT_NUMERO);
 }
 sum = numeral(sum).format(FMT_NUMERO);
 rest = numeral(rest).format(FMT_NUMERO);
 mult = numeral(mult).format(FMT_NUMERO);
 
    var datos="<label>Suma: </lavel>"+sum+"<br>\
        <label>Resta: </label>"+rest+"<br>\n\
        <label>Multiplicación: </label>"+mult+"<br>\n\
        <label>División: </label>"+div;
 
 resultado.innerHTML = datos;
 }
}
