/*Las clases u objetos tienen estados (Valor Que puede guardar) y 
comportamiento(Se crea apartir de funciones)*/

//Los ambitos son los que estan dentro de los corchetes.

//Funcion Constructor.
/*
Las variables 
var x = 12;
*/

/*El constructor se ejecuta con un objeto 'new'
Metodo cuando esta dentro de una clase.
El metodo constructor es el unico que no puede llamarse, por que ya lo hace.*/

class Animal {
    constructor() {
        console.log('Se activo el Constructor');
    }
    mensaje() {
        console.log('Soy un mensaje');
    }
}

var objeto1 = new Animal(); //Las palabras reservadas son las de color morado, el new es una instancia
console.log(typeof(objeto1)) // Colocar constructor por defectos.

// Esto(Contexto de la clase) = This 
//Parametro significa 
//Getter Significa
//Setters una Modificacion

class Animal {
    constructor(nombre) {
            this._nombre = nombre;
            //console.log('Se activo el Constructor');
        }
        //camell case   
        /*getNombre() {
            return this.nombre;
        }*/
    get nombre() {
            return this._nombre;
        }
        /*setNombre() {
            return this.nombre;
        }*/
    set nombre(nombre) {
        this._nombre = nombre;
    }
    mensaje() {
        console.log('Soy un mensaje uwu')
    }
}
var objeto1 = new Animal('Conejo');
console.log(objeto1)
    //objeto1.setNombre('Liebre')
objeto1.nombre = 'Conejo Doméstico'
    //console.log(objeto1.getnombre())
console.log(objeto1.nombre);
//console.log(typeof(objeto1))


class Numeros {

}


/*MISION: 
1.ESCRIBA METODOS PARA  SUMA, PROMEDIO, MAYOR Y MENOR. 
2.ESCRIBA UNA CLASE QUE REPRESENTE UN PRODUCTO COMERCIAL ÁREA. DEBE TENER CONSTRUCTOR,
SETTERS, GETTERS Y UN METODO PARA CALCULAR EL VALOR DESPUES DEL IVA. 
3. LEER LA PAGINA 149 A LA PAGINA 161 EXCLUYENDO PRODCUTOS DEL LIBRO ENVIADO JS.
*/