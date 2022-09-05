var lista = []
var num1=1;

while (num1>0){
    var num1 = Math.round(Math.random()*(100+100)-100);
    console.log(num1);
    if(num1>0){
        lista.push(num1);
    }
    
    
}
console.log(lista.length)
