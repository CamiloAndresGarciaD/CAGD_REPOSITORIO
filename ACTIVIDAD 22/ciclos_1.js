//DIVISORES DE UN NUMERO EN FUNCION.
function divisores(introduce) {
    let instroduce = 0
    for (i = 1; i <= introduce; i++) {
        if (introduce % 1 == 0) {
            console.log(i)
        }
    }
}

divisores(10);

//DETERMINAR SI UN NUMERO ES PRIMO 

function numeroprimos(num1) {
    let divisores = [];
    for (i = 0; i <= num1; i++) {
        if (num1 % i == 0) {
            divisores.push(i);
        }
    }
    if (divisores.length < 3) {
        console.log('es primo')
    } else {
        console.log('no es primo');
    }
}

numeroprimos(15);

//Determinar si un numero es perfecto

function numero_perfecto(num1) {
    let perfecto = 0
    for (i = 1; i < num1; i++) {
        if (num1 % i == 0) {
            perfecto = perfecto + i;
        }
    }
    if (perfecto == num1) {
        console.log('es perfecto')
    } else {
        console.log('no es perfecto')
    }
}
numero_perfecto(8128);

//Multiplos de 5

function calcularMultiplo5(numero) {
    return Math.ceil(numero / 5) * 5;
}

console.log(calcularMultiplo5(8));


// MCD
function mcd(a, b) {
    while (a != b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }

    return a;
}

console.log(mcd(5, 8))