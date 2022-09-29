// Que es Temporizadores (settimeout - setinvernal), setclear
setTimeout(() => {
    console.log("Ejecutando la funcion settimeout, solamente se ejecuta una sola vez")
}, 11000);

setInterval(() => {
    console.log("Ejecutando la funcion setInterval, solamente se ejecuta en el intervalo de tiempo")
}, 1000);

//Para ejecutar un setclear se debe almacenar el intervalo en una variable 
let temporizador = setInterval(() => {
    console.log(new Date().toLocaleTimeString())
}, 100);
clearInterval(temporizador) //Al ejecutarce el intervalo esto hace que se cancele

//Que es Callback Se va ejecutar despues de que otra lo haga
function cuadradocallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value)
    }, Math.random() * 100);
}
/*Esto es conocido como un callback hell, se conoce como un callback 
hell cuando se colocan los argumentos de otra funcion*/
cuadradocallback(10, (value, result) => {
    console.log("Inicia Calback");
    console.group(`Callback: ${value}, ${result}`);
    cuadradocallback(9, (value, result) => {
        console.group(`Callback: ${value}, ${result}`);
    })
    cuadradocallback(8, (value, result) => {
        console.group(`Callback: ${value}, ${result}`);
    })
    cuadradocallback(7, (value, result) => {
        console.group(`Callback: ${value}, ${result}`);
    })
    cuadradocallback(6, (value, result) => {
        console.group(`Callback: ${value}, ${result}`);
    })
})

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


// Ejercicio Final de Clase 13


function General(cb1, cb2, text){
    let textominus = text.toLowerCase();
    let textomayus = text.toUpperCase();
    console.log (`el texto general es ${text}\nen miniscula es ${textominus}\nen mayuscula es ${textomayus}`)
    setTimeout(() => {
        cb1(text)
    }, 2000);
    setTimeout(() => {
        cb2(text)
    }, 4000);
}

function mayusculas(text){
    let cont=0
    let mayusculas= 'QWERTYUIOPASDFGHJKLZXCVBNM'
    for (let i = 0; i < mayusculas.length; i++) {
        for(let x=0; x < text.length; x++ ){
        if(mayusculas[i] == text[x]){
            cont = cont + 1 
            }
        
        }   
    }
    console.log(`El total de mayusculas es: ${cont}`)
}

function minisculas(text){
    let cont=0
    let minisculas= 'qwertyuiopasdfghjklñzxcvbnm'
    for (let i = 0; i < minisculas.length; i++) {
        for(let x=0; x < text.length; x++ ){
        if(minisculas[i] == text[x]){
            cont = cont + 1 
            }
        
        }   
    }
    console.log(`El total de minusculas es: ${cont}`)
}

General(minisculas,mayusculas, 'Tengo sueñoooooo Zzzzzz...')

/*Que son promesas en JS,  */

function cuadradopromise(value) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve({
                value,
                result: value*value
            });
        }, Math.random() * 100);
    })/*Resive dos valores dentro de este 'Resolve' que resuelve, seria como un return 
    positivo y el siguiente el negativo 'reject' parte que rechaza la promesa*/
}

cuadradopromise(8)
.then()
.catch();/*2 metodos para trabajar las sincronia en este: 'Then' 
siguiente bloque que se va a ejecutar una vez que se cumpla y el 'Catch' captura el error resultante de la promesa*/

function base(){
    return new Promise((resolve, reject) =>{
        resolve();
        setTimeout(() => {
            console.log('Linea de codigo dentro de la funcion promesa ')
        }, 500);
        
    });
}

base()
    .then(()=>{
        console.log('En el . Then')
    })
    .then(auxiliar)
    function auxiliar(){
        console.log('Funcion Auxliar'); 
    }

function base(){
        return new Promise((resolve, reject) =>{
            if(true){
                resolve();
                setTimeout(() => {
                    console.log('Linea de codigo dentro de la funcion promesa ')
                }, 500); 
            }else{
                reject()
            }        
        });
    }