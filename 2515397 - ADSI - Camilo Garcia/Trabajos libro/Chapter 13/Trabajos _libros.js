//Ejercicio 13.1  
function saludar(Nombrecompleto) {
    console.log(`Binvenido o Bienvenida, ${Nombrecompleto[0]} ${Nombrecompleto[1]}`)
}

function processCall(usuario, callback) { //
    const Nombrecompleto = usuario.split(" "); // Split divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas
    callback(Nombrecompleto);
    /*callback es una función que se pasa a otra función como un argumento, 
       que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción*/
}

processCall("Camilo Garcia", saludar);
processCall("Vannesa Rodriguez", saludar);

// Ejercicio 13.2

const Numeros = new Promise((resolve, reject) => {
    resolve("Comienza el Conteo");
});

function contador(val) {
    console.log(val);
}

Numeros
    .then(value => { contador(value); return "Uno" })
    .then(value => { contador(value); return "Dos" })
    .then(value => { contador(value); return "Tres" })
    .then(value => { contador(value); return "Cuatro"})

//Ejercicio 13.3
let cnt = 0;

function Tiempodesalida(val) {
    return new Promise(resolve => {
        setTimeout(() => {
            cnt++;
            resolve(`x valor ${val} counter:${cnt}`);
        }, 1000);
    });
}
async function llamada(val) {
    console.log(`Preparado ${val} contador:${cnt}`);
    const res = await Tiempodesalida(val);
    /*La expresión await provoca que la ejecución de una función async 
        sea pausada hasta que una Promise sea terminada o rechazada, y regresa a la ejecución de la función async después del término*/
    console.log(res);
}
for (let x = 1; x < 4; x++) {
    llamada(x);
}

