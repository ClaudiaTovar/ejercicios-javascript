
// clases basicas en javascript

//forma actual de inicializar clases

class Persona {
    nombre = ``;
    codigo = ``;
    frase = ``;
    comida = ``;

    constructor(nombre, codigo, frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    //set
    /*para establecer un valor y controlar como se establece el valor de una propiedad
    -el set solo recibe un argumento que seria una propiedad definida con anterioridad
    -los sets no pueden tener el mismo nombre que la propiedad a la cual se lo queremos establecer
    
    En este ejemplo queremos controlar que el valor de la propiedad comida
    siempre este en mayuscula con el metodo .toUpperCase()
    */

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase() ;
    }
   
    //get
    /*para recuperar un valor de una propiedad.
    -puedo aplicar metodos a la propiedad recuperdad
    -SIEMPRE debe retornar algo por lo que debo colocar un RETURN
    -debe usarse el this.propiedad para hacer referencia a la propiedad de la clase
    -el get no puede llevar el mismo nombre de la propiedad a la que hago referencia porque 
    crea un ciclo infinito 
     */

    get getComidaFavorita(){
        return `la comida favorita de ${this.nombre} es ${this.comida}`;
    }


    //metodo
    quienSoy(){
        console.log(`Soy ${this.nombre}, mi codigo es ${this.codigo} y mi frase es ${this.frase}.`);
        
    }

}

const iroman = new Persona(`Iroman`, `22`, `soy el mejor`)
console.log(iroman)

//para usar el set
/* para llamar un set funciona como cualquier propiedad por eso no se
llama setComidaFavorita() sino solamente asi: */

iroman.setComidaFavorita = `Arroz con leche`
console.log(iroman)

//para usar el get 
console.log(iroman.getComidaFavorita);






