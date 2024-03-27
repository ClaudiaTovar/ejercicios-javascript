/* TIPOS DE DATOS PRIMITIVOS EN JS

boolean -- true o false
null -- sin valor en absoluto
undefined -- una variable declarada que aun no se le asigna valor
number -- numeros enteros, flotantes, etc
string -- cadena de caracteres
symbol -- tipo de dato unico que no puede ser igual a otro valor

*/

//string
let nombre = `claudia`
nombre = `mariana` // reasignacion del contenido de la variable
console.log(typeof nombre)

//numeros
let numero1 = 24
console.log(typeof numero1)

//boleano
let comparacion = 3 < 5
console.log(typeof comparacion)

//undefined
let indefinida;
console.log(typeof indefinida)

//symbol
let symbol1 = Symbol(`a`);
console.log(typeof symbol1)

