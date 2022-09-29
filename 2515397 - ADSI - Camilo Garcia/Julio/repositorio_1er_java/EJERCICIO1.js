var num1 = Math.round(Math.random()*100);
var divisores = [];

for (var i = 0; i<=num1; i++){
    if ( num1%i == 0){
        divisores.push(i);
    }
}
console.log('los divisores de ',num1, ' son: ')
console.log(divisores)