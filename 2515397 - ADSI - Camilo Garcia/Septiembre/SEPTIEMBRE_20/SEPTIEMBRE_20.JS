function General(cb1, cb2, text){
    return new Promise((resolve, reject )=>{
        if (true) {
            resolve()
    let textominus = text.toLowerCase();
    let textomayus = text.toUpperCase();
    console.log (`el texto general es: ${text}\nen miniscula es: ${textominus}\nen mayuscula es: ${textomayus}`)
    setTimeout(() => {
        cb1(text)
    }, 2000);
    setTimeout(() => {
        cb2(text)
    }, 4000);
        } else {
            
        }
    })
    
}

function mayusculas(text){
    return new Promise((resolve,reject)=>{
        if (true) {
            resolve();
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
        } else {
            
        }
    })

}

function minisculas(text){
    return new Promise((resolve, reject)=>{
        if (true) {
            resolve();
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
        } else {
            
        }
    })
    
}

async function Generall(text,cb1,cb2){
    const mayus_minus = await General (cb1, cb2, text)
    console.log (mayus_minus);
}

Generall('Una luz en la batalla, una luz en la oscuridad', mayusculas, minisculas)


/* CRECIMIENTO EXPONENCIAL
N = Tamaño de la poblacion.
R = Tasa de Crecimiento.
Naciminetos - muertos / N = Así se podria saber la incognita R 
DN / DR = R*N

N(T) = N(1+R)**T    
1. Generar un numero de 1000 a 10000
2. Generar el calculo de crecimiento */


TP = Math.round(Math.random()* 9000+1000);
for (let i = 1; i < 10; i++) {
 
    tasadenacimiento = Math.floor(Math.random()* (TP/10));
    tasademuerte = Math.floor(Math.random() * (TP*(0.03)));
    tc = (tasadenacimiento - tasademuerte) / TP
    poblacion1= TP*(1*tc)**1
    console.log(`La cantidad de poblacion es: ${TP}\nLa tasa de nacimiento es: ${tasadenacimiento}% \nla tasa de muertes es: ${tasademuerte}% \nEl periodo es: ${i}\nLa funcion Algebraica es: ${poblacion1}\n-----------------------------------`)
}

// Al 10% de la poblacion final se le va a entregar la casa, el crecimiento neto en los 10 periodos

function Casa(){
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve('El 10% que obtendran casa seran:'  + tasadenacimiento)
        }, 2000);
    })
}

function Crecimientoen10periodos(){
    return new Promise (resolve => {
        setTimeout(() => {
           resolve('La tasa de crecimientos en 10 periodos son:' + tc) 
        }, 4000);
    })
}

async function CC(){
    const CCS = await (Casa(),Crecimientoen10periodos());
    console.log(CCS);
}

CC()