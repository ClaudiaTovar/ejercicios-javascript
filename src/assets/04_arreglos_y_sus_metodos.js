/* arreglos: un conjunto de datos que 
puede ser de cualquier tipo */

//formas de crear arreglos, con new Array()

let arreglo = new Array(2, 3, 4, 5, 6, 7);
console.log(arreglo)

// otra forma de crear arreglo con [ ]

let arreglo2 = [1, 12, 23, 34, 45]
console.log(arreglo2)

/* para acceder a los elementos del arreglo
lo hacemos a traves de los inidces,
el primer elemento tiene indice 0 y el 
ultimo .length -1 */

console.log(arreglo[0])
console.log(arreglo[arreglo.length - 1 ])

/* este es un arreglo vacio */
let arrVacio = [];
console.log(arrVacio)

// arreglo con arreglos

let arrDArreglos = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arrDArreglos)

//arreglos con diferentes tipos de datos

let arrVariado = [[1,2,3], 2, {a:0}, function(){}, true]
console.log(arrVariado)

/*los arreglos tienen metodos que son funciones que
hacen algo especifico en los arreglos*/

//metodos de los arreglos

let arrConcatenado = arrVariado.concat(arrDArreglos);
console.log(arrConcatenado)

//para obtener el total de elementos del arreglo
console.log(arrConcatenado.length)

//para recorrer cada elemento del arreglo y hacer algo con el

arrConcatenado.forEach((elemento, indice, arr)=>[
    console.log({elemento, indice,arr})
])

// para insertar un nuevo elemento

arrConcatenado.push("claudia")
console.log(arrConcatenado)

