// CICLO WHILE

const carros = [`ford`, `mazda`, `honda`, `toyota`]

let i = 0;

while(i < carros.length){
    console.log(carros[i])
    i++;
}

/* se ejecuta el ciclo siempre y cuando la condicion
que esta entre () sea verdadera, PARA QUE SE 
EJECUTE LA CONDICION TIENE QUE SER SI O SI
VERDADERA, se debe tener cuidado
porque se puede crear un ciclo infinito*/
/* el contador que es la variable let i, se coloca 
dentro de la funcion y no en la condicion, y debe 
colocarse para cortar el ciclo */

// CICLO DO-WHILE

let j = 0;

do {
    console.log(carros[j]);
    j++;
} while(carros[j]);

/*en el ciclo do-while primero va a ir la accion que 
se ejecuta mientras la condicion sea correcta, 
en este ciclo la accion se ejecuta la menos una vez,
tambien debe ponerse un contador o se creara un ciclo 
infinito */