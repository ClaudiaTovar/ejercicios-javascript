/*IF es una funcion que entre parentesis recibe los 
argumentos que se van a comparar y a partir de esa
comparacion se ejecuta un codigo que se escribe entre {} */

let a = 12

if(a <= 10){
    console.log(`A es menor que diez`)
}else{
    console.log (`A es mayor que diez`)
}

/*if puede leerse "si( lo que hay aqui es verdadero)
entonces {haz esto} sino (else) {haz esto otro}*/

const hoy = new Date();
let day = hoy.getDay();

console.log({day})

if(day === 0){
    console.log(`Hoy es domingo`)
}else if ( day === 1){ 
    console.log(`Hoy es lunes`)
}else if(day === 2){
    console.log(`Hoy es martes`)
}else if(day === 3){
    console.log(`Hoy es miercoles`)
}else if(day === 4){
    console.log(`Hoy es jueves`)
}else if(day === 5){
    console.log(`Hoy es viernes`)
}else {
    console.log(`Hoy es sabado`)
}

/* else if(){} nos permite evaluar mas condiciones
dentro del mismo codigo */


const diasLetras = {
    0 : "domingo",
    1 : "lunes",
    2 : "martes",
    3 : "miercoles",
    4 : "jueves",
    5 : "viernes",
    6 : "sabado"
}

console.log(`Hoy es ${diasLetras[day]}`) /* tambien 
podemos objetener el valor de una llave de un objeto colocando 
entre [ ] una variable que represente el valor de la llave
como en el ejemplo anterior */

// el ejemplo anterior tambien con arreglos

const diasLetras2 = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]

console.log(`Hoy tambien es ${diasLetras2[day]}`)




