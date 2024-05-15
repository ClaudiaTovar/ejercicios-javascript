
//PROPIEDADES, GETS Y METODOS ESTATICOS DE UNA CLASE 
/* 
-Una propiedad estatica no aparecera cuando se imprima el objeto en 
la consola del navegador pero estara en prototype (adn de la clase)
-se usa la palabra static
-un contador q nos permite contar cuantas veces se ha usado una clase
y se escribe en el constructor que es el que se activa cada vez que 
llamo la clase. 
-la definicion de propiedades, gets o metodos estaticos van justo al inicio
de la creacion de la clase como se observa en el ejemplo. 
*/

class Persona {

    //propiedadse, gets y metodos staticos:

    static conteo = 0;
    static get getConteo(){
        return `Las veces que se ha usado la clase persona son: ${Persona.conteo}`
    }
    static mensaje(){
        console.log(`Hola, soy un metodo estatico`)
    }

    //definicion de propiedades de la clase 

    nombre = ``;
    codigo = ``;
    frase = ``;
    comida = ``;

    //constructor
    
    constructor(nombre, codigo, frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona.conteo++
    }

    // sets y gets 

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase() ;
    }
   
    get getComidaFavorita(){
        return `la comida favorita de ${this.nombre} es ${this.comida}`;
    }


    //metodo
    quienSoy(){
        console.log(`Soy ${this.nombre}, mi codigo es ${this.codigo} y mi frase es ${this.frase}.`);
        
    }

}

//creacion de un nuevo personaje con la clase Personaje.

const iroman = new Persona(`Iroman`, `22`, `soy el mejor`)
const spiderman = new Persona(`spiderman`, `31`, `soy una araña`)
const mujerMaravilla = new Persona(`MujerMaravilla`, `52`, `soy una heroina`)
console.log(iroman)

//usar el set 
iroman.setComidaFavorita = `Arroz con leche`
console.log(iroman)

//para usar el get 
console.log(iroman.getComidaFavorita);

//propiedad, get y metodo estatico
console.log(`veces que se ha usado la clase Persona:`, Persona.conteo)
console.log(Persona.getConteo)

//para llamar metodos se usa con ( ) asi: 
console.log(Persona.mensaje());






