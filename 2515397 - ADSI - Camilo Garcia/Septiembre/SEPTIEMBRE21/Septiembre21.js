/*Video de clase - Tacos de cocina
Asincronismo: Corre 1 tarea a la vez
- Memory Heap:Espacio donde se almacena
- Call Stack: donde organizan las tareas, Apis del la parte del navegador.
- Event Loop: Observador, es como un ciclo que esta a la espera de nuevas tareas, 
- Existen entidades que ayudan a manjearse, windows es el objeto global donde muestra todas las opciones.
- Dom (document):Manejas las etiquetas.
- Callback Queue: Dila de tareas que tiene que hacer
- */
console.log("Pizza 1");
console.log("Pizza 2");
console.log("Pizza 3"); 
setTimeout(() => {
    console.log('Salchipapa');
}, 2000);
console.log('´Pizza 4');

/*Segundo Video: Ejecucion en una aplicacion de la web lalentip
- Event Loop: Ejctua un orden de eventos, es una tarea particular. Se encarga de mover tareas al Stack
- Memory Heap: Son asignados a un espacio de memoria gigante.
- Call Stack:Apila de forma organizada.
- Task QUEUE: MicroEs la cola de tarea que va ejecutar el stack. Se tiene que tener mucho cuidado en la ejucucion.
- Micro Task QUEUE: Traen consigo las promesas.
- Web Api's: Js nacio dentro del navegador, trabja con diferente vairadosm elemontos. 
- Ejemplo de la logica.*/
$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");


