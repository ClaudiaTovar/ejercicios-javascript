/*otra forma de escribir la clase, es definiendo las propiedades
directamente en el constructor */

class persona {

    
    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    //metodo
   getInfo(){
        console.log(`Info persona: ${this.nombre}, ${this.apellido}, de ${this.pais}`)
    }
}



const persona1 = new persona("clau", "tovar", "colombia");

persona1.getInfo();