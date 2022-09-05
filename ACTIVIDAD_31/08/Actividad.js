/*Proteger un dato privado*/

class Persona{
    #nombre
    constructor(nombre){
        this.#nombre=nombre
    }
    get nombre(){
        return this.#nombre
    }
}

let objeto= new Persona('Pedro Picapiedra');
console.log(objeto.nombre)

class Persona{
    constructor(nombre, documento){
        this._nombre=nombre;
        this._documento=documento;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}


