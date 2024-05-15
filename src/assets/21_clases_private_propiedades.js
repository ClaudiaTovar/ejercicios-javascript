//PROPIEDADES PRIVADAS
/*se establecen propiedades privadas para que externamente no puedan ser modificados
sus valores 
- para colocar una propiedad privada uso #, pero debo usarlo en todo lado como 
se muestra a continuacion*/

//investigar si hay metodos privados
//usar can i use para saber si los metodos privados se pueden implementar y en que navegador 

class Rectangulo {

    #area = 0;
    base = 0;
    altura = 0;

    constructor(base, altura){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura
    }

    
}

const rectangulo1 = new Rectangulo(10, 15);

console.log(rectangulo1)