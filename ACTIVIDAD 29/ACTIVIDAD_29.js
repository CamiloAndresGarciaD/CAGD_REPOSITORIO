/*MISION: 
1.ESCRIBA METODOS PARA  SUMA, PROMEDIO, MAYOR Y MENOR.*/
class Calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }

    suma(num1, num2) {
        this.valueA = num1
        this.valueB = num2
        return this.valueA + this.valueB
    }
}
const calculadora = new Calculator()
console.log(calculadora.suma(2, 2))

/*2.ESCRIBA UNA CLASE QUE REPRESENTE UN PRODUCTO COMERCIAL ÁREA. DEBE TENER CONSTRUCTOR,
SETTERS, GETTERS Y UN METODO PARA CALCULAR EL VALOR DESPUES DEL IVA.*/

/*3. LEER LA PAGINA 149 A LA PAGINA 161 EXCLUYENDO PRODCUTOS DEL LIBRO ENVIADO JS.
 */
//Ejericio 1 del Libro
class Personas {
    constructor(Primernombre, Apeliido) {
        this.Primernombre = Primernombre;
        this.Apeliido = Apeliido;
    }
}
let persona1 = new Personas("Camilo_", "Garcia");
let persona2 = new Personas("Lina_", "Benitez");
console.log("¡Hola! " + persona1.Primernombre + persona1.Apellido);
console.log("¡Hola! " + persona2.Primernombre + persona2.Apeliido);

//Ejercicio2 del libro

class Personas {
    constructor(Primernombre, Apeliido) {
        this.Primernombre = Primernombre;
        this.Apeliido = Apeliido;
    }
    fullname() {
        return this.Primernombre + " " + this.Apeliido;
    }
}
let person1 = new Personas("Camilo Andrés", "García D.");
let person2 = new Personas("Lina Valentina", "Benitez D.");
console.log("¡Hola! " + person1.fullname());
console.log("¡Hola! " + person2.fullname());


/*Clase_29-Una instacia se crea apartir de una clase en  JS*/


//Herencia: Tiene "es un - Triangulo", y "Tiene un - Rombo"

class Persons {
    constructor(nombre, documento) {
        this._nombre = nombre;
        this._documento = documento;
    }
}

class Aprendiz extends Persons {
    constructor(nombre, documento, ficha) {
        super(nombre, documento);
        this._ficha = ficha;
    }
}

let persons1 = new Aprendiz('Camilo Andres', 753698, 'ADSI');
let persons2 = new Persons('Ana Valentina', 985238);