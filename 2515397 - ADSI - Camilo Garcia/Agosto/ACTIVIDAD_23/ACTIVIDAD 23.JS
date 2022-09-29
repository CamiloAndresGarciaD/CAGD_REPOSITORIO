//funcion primo

function primo(num){
    var comt=0
    for (let i=1; i < num; i++){    
    }
    if (con>2){
        return 'no primo'
    }else{
        return 'primo'
    }
}


// return const>2 'No es primo':'Si es primo'

console.log(primo(12))

//Escriba una funcion que eleve una cadena de texto, ¿Cuantas Vocales, consonantes y cuantas que no son Vocales, consonante?


/*Tema Nuevo - Productos Literales (No son creados apartir de una clase)
CLave = Defincion agregando dos puntos: El valor que tiene la definicion
Las parejas se separan por "."
*/ 

var Persona={
    nombre:'Pedro Perez',
    id:12345,
    datosCompletos: ()=>console.log(`${Persona.nombre}${Persona.id}`),
}

//Seleccionar Un dato
console.log(Persona.nombre);
//2da Manera de Seleccion
console.log(Persona['id']);
//Seleccion de Datos
Persona.datosCompletos();
//Insertar un Dato.
Persona.direccion='Calle Con Cra';
//Mostrar la variable
console.log(Persona);
//Actualizar un Nombre
Persona.nombre='Juan Ramirez'
//Eliminar 
delete Persona.id


//Triangulo 

var Triangulo={
    base : 6,
    altura : 15, 
    hipotenusa :(Base,Altura)=>(Base**2 + Altura**2)**1 / 2,
    lado: Triangulo.hipotenusa(Triangulo.Base, Triangulo.Altura),
    perimetro: (Base, Lado) => (Lado * 2) * Triangulo.Altura,
    areaf: (Base, Altura) => (Base * Altura) / 2,
    area: Triangulo.areaf(Triangulo.Base, Triangulo.Altura)
}
console.log(Triangulo);

//Circulo

var Circulo={

}