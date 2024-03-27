//FUNCIONES
/* saaludar es el nombre de la funcion, entre () van los parametros
que acepta y dentro de {} va la logica de la funcion y 
lo que realiza *///FUNCIONES
/* saaludar es el nombre de la funcion, entre () van los parametros
que acepta y dentro de {} va la logica de la funcion y 
lo que realiza */

function saludar(nombre){
    console.log(`Hola querida ${nombre}`)
}

saludar("claudia")

// funcion anonima porque no tiene nombre, pero esta guardada dentro de unavariable
 const saludar2 = function(name){
    console.log(`Hola señorita ${name}`)
}

console.log(saludar2("tatiana"));

//funciones flecha o landan function

const saludar3 = (name1) => console.log(`Hey tu ${name1}`)

console.log(saludar3("tovar"))
