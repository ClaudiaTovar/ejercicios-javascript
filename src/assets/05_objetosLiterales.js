/* objetos literales: son objetos que tiene pares de valores
tienen una propiedad que es la llave y el valor
asi llave:valor */

let personaje = {
    nombre:`claudia`,
    codeName: `mujer maravilla`,
    vivo: false,
    edad: 31,
    coords: {
        lat: 34.4,
        long: 117.4
    },
    trajes: [`mark`, `mark i`, `mark v`]
};

console.log(personaje)

/* para acceder a los valores de las llaves del objeto,
lo hacemos a traves de las llaves 
personaje.nombre y de los  [] */

console.log(personaje.nombre)
console.log(personaje.coords.lat)
console.log(personaje[`edad`]) /*entre [] 
escribir el nombre de la llave */


//borrar llaves del objeto
delete personaje.edad
console.log(personaje)

//para añadir llaves y su contenido solo lo definimos
personaje.casado = false;

//para convertir un objeto en arreglo

let conversion = Object.entries(personaje);
console.log(conversion)

//para congelar el objeto y que no se puedan hacer modificaciones
Object.freeze(personaje);

// este metodo devuelve un arreglo del listado dde propiedades del objeto
let propiedades = Object.getOwnPropertyNames(personaje)
console.log(propiedades)


//Este metodo devuelve un arreglo con los valores de las llaves o propiedades
let valores = Object.values(personaje);
console.log(valores)



