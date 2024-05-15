// clases basicas en javascript

//forma actual de inicializar clases

class Persona {
    nombre = ``;
    codigo = ``;
    frase = ``;

    constructor(nombre, codigo, frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
   
    //metodo
    quienSoy(){
        console.log(`Soy ${this.nombre}, mi codigo es ${this.codigo} y mi frase es ${this.frase}.`);
        
    }
}

//para crear una nueva instancia debemos usar la palabra new

const spiderman = new Persona(`spiderman`, 23, `hola`)

const iroman = new Persona(`Iroman`, 12, `me gusta el queso`)

//usar el metodo:

spiderman.quienSoy();
iroman.quienSoy();

/*
El objetivo de las clases es crear objetos que tengan en comun 
propiedades y metodos sin estar escribiendo mucho codigo:

primero se inicializan las propiedades que va a tener el objeto, como 
nombre, codigo, frase

segundo se crea el constructor 
-contructor = metodo que se ejecuta en el momento exacto
en que se crea una nueva instancia Persona
-el constructor recibe unos parametros, que son los mismos que las propiedades de la clase


tercero el metodo se crea justo debajo del contructor
*/
