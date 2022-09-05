var contador = 0;

for (var num1 = 1; num1 <=1000; num1++){
    var divisores = [];
    for (var i = 0; i<=num1; i++){
        if ( num1%i == 0){
            divisores.push(i);
        }
    }
    if (divisores.length<3){
        console.log(num1)
        contador = contador + 1;
    }
}
console.log('el total de numeros primos entre 1 y 1000 es: ', contador)
