//CICLO FOR TRADICIONAL
/*dentro de los parentesis van tres partes 
(let i = 0; condicion por la cual el ciclo for se va a ejecutar, aumento de la variable)*/

console.warn("CICLO FOR TRADICIONAL")

const heroes = ["superman", "mujer maravilla", "acuaman", "batman"]

for(let i = 0; i < heroes.length; i++) {
    console.log(heroes[i])
}

//CICLO FOR IN

console.warn("CICLO FOR IN");

for(let i in heroes){
    console.log(heroes[i])
}

/*es lo mismo que el ciclo for tradicional solo que mas corto*/

//CICLO FOR OF

console.warn("CICLO FOR OF")
for(let heroe of heroes){
    console.log(heroe)
}

/*la variable heroe (creada para ese ciclo) guardaria el resultado de la iteracion en 
la constante heroes y hariamos algo con ella, en este caso
mostrarlo en consola */


