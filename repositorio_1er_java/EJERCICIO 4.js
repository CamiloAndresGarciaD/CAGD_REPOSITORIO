var contador = 0;
var condicion;
for (var num1 = 1; num1 <=1000; num1++){
    var perfecto = 0;
    for (var i = 1; i<num1; i++){

        if ( num1%i == 0){
            perfecto = perfecto + i;
        }
        
    }
    if (perfecto == num1){
        console.log(num1)
        contador=contador +1
    }
}
console.log(contador)

