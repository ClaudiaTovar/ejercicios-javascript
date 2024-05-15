
//Herencia, clases y subclases

//CLASE MADRE

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



//SUBCLASE

/*
usar la palabra extends para crear la subclase de la clase madre Persona 
*/

class Heroe extends Persona {
    clan = ``

    constructor(nombre, codigo, frase){
        /*hace referencia al constructor de la clase que extiende "Persona", debe llevar 
        los mismos parametros del constructor madre
        - super() siempre debe ir al inicio del contructor y debe llevar los mismos
        parametros de la clase madre 
        */
        super(nombre, codigo, frase); 
        this.clan = `the avengers`

        
    }

    //si quiero reescribir un metodo y a la vez llamar al metodo original con super
    quienSoy(){ 
        console.log(`Soy ${this.nombre}, ${this.clan}`)
        super.quienSoy();
        
    }
}

const iroman = new Heroe(`iroman`, 22, `soy un superheroe`, `arroz con leche`,`los chimbita`);

console.log(iroman)

//llamada al metodo
console.log(iroman.quienSoy())
