var num1 = Math.round(Math.random()*100);
var divisores = [];
console.log(num1)
for (var i = 0; i<=num1; i++){
    if ( num1%i == 0){
        divisores.push(i);
    }
}
if (divisores.length<3){
    console.log('es primo')
}else{
    console.log('no es primo');
}