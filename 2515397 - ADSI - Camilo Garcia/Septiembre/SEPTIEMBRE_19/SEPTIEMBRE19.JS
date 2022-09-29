//Funciones a promesas 
function General(cb1, cb2, text){
    return new Promise((resolve, reject )=>{
        if (true) {
            resolve()
            let textominus = text.toLowerCase();
    let textomayus = text.toUpperCase();
    console.log (`el texto general es ${text}\nen miniscula es ${textominus}\nen mayuscula es ${textomayus}`)
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
            reject
        }
    })

}
mayusculas('Hola')
    .then(()=>{
        console.log('Angis me ayudo xd')
        return 'Angis me ayudo xd'
    })

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

General(minisculas,mayusculas, 'Tengo sueñoooooo Zzzzzz...')

//Async
//Await 

function Di_algo(x){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Di Algo_" + x);
        }, 2000);
    } )
}

async function talk(x){
    const words = await Di_algo(x);
    console.log(words);
}

talk(2);
talk(3);
talk(4); 