// operador ternario

/* es una estructura mas sencilla para evaluar condiciones
y efectuar acciones en base a estas condiciones, ejemplo:

condición ? expr1 : expr2

condicion se evalua como true o false
expr1 y expr2 son las acciones que se ejecutan en base a la condicion

si la condicion es true se retorna el valor de la expr1
si la condicion es false se retorna el valor de la expr2

*/
let nota = 2;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Operador ternario: (condición ? verdadero : falso)
let calificacion = nota < 5 ? "suspendido" : "aprobado";

console.log("Estoy", calificacion);
