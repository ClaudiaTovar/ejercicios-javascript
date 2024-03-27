//retorno en las funciones
/* las funciones por defecto retornan undefined si no tiene un retorno explicito
IMPORTANTE el codigo que va despues del return no se 
ejecuta
*/

const saludar3 = (name1) => {
    console.log(`Hey tu ${name1}`)
    return 20;
    console.log("es un codigo que no se ejecuta") //no se ejecuta porque antes hay un return
 }

 const retornoSaludar = saludar3("adrian")
 console.log({retornoSaludar})

const suma = (a,b) => ( `la suma es ${a+b}`  ); /*cuando
solo tenemos una linea de codigo que es el return, lo podemos
escribir el return entre () */


console.log(suma(4,5))

//funcion para retornar un numero aleatorio

const obtenerAleatoreo = () => (Math.random());
console.log( obtenerAleatoreo())
