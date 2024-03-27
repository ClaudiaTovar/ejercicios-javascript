// PASADOS POR REFERENCIA - OBJETOS
/*esto quiere decir que si en una variable hago alusion
a un objeto que despues modifico, la variable tambien se 
modifica
*/


//PASADOS POR VALOR - PRIMITIVOS

let a = 10;
let b = a;
a = 30;
console.log ({a, b})

let juan = { nombre: `Juan`};
let ana = juan;
ana.nombre = `ana`;
console.log({juan , ana});


//OBJETOS COPIADOS ROMPIENDO LA RELACION
/*si queremos copiar un objeto y romper la referencia
al objeto copiado debemos escribirlo con el operador
spred ... asi: */

let silvia = { nombre: `silvia`};
let claudia = {...silvia}; //el objeto copiado con el operador spred se coloca entre { } porque es un nuevo objeto
claudia.nombre = `claudia`;
console.log({silvia, claudia });


// ARREGLOS COPIADOS ROMPIENDO LA RELACION: 

let frutas = [`mango`, `pera`, `banano`];
let otrasFrutas = [...frutas]; //el arreglo copiado con el operador spred se coloca entre [ ] porque es un nuevo arreglo
otrasFrutas.push(`piña`);
console.table({frutas, otrasFrutas})

let animales = [`vaca`, `perro`, `toro`];
let otrosAnimales = animales.slice(); //este metodo es otra forma de copiar los arreglos rompiendo la relacion con el arreglo copiado
otrosAnimales.push(`gato`, `pollito`);
console.table({otrosAnimales, animales})


