function crearPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

let persona1 = crearPersona(`claudia`, `tovar`)
console.log(persona1)

// la misma funcion que arriba solo que en flecha

const crearAnimal = (nombre,tipo) => ({nombre,tipo})

let animal1 = crearAnimal(`Gantun`, `gato`)
console.log(animal1)

//tip para trabajar varios argumentos en una funcion flecha

const imprimirArgumentos = (...args) => (args);

console.log(imprimirArgumentos(1,2,3,`claudia`))

/* parametro rest ... en los argumentos de la funcion
indican que va a tomar todos los argumentos que se 
envien ahi y los convierte en un arreglo con
el que puedo trabajar */
/* despues del argumento rest no pueden ir mas argumentos
y si necesito sacar otros argumentos entes de, tengo que mencionarlo asi: */

const imprimirArgumentos2 = (edad, ...args) => ([edad, args]);
console.log(imprimirArgumentos2(24, `claudia`, `tovar`, `psicologa`))

//desestructurando objetos

const imprimirAgumentos3 = (nombre, apellido, edad, estadoCivil) => ([nombre, apellido, edad, estadoCivil])

const [nombre, apellido, edad, estadoCivil] = imprimirAgumentos3(`claudia`, `tovar`, 31, `casada`)

console.log( {nombre, apellido, edad, estadoCivil }) //para que me muestre la informacion en forma de objeto