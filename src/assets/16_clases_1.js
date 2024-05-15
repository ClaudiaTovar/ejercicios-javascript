// clases

//----- forma antigua de trabajar con clases


// para hacer referencia al objeto del que hago parte uso la palabra this

const fernando = {
    nombre: `fernando`,
    edad: 23,
    imprimir(){
        console.log(`Nombre: ${this.nombre} -  edad ${this.edad}`)
    }
}

fernando.imprimir();

// crear objetos que tengan el mismo tipado asi:
/*esta funcion tiene el nombre en inicial mayuscula porque es una 
funcion que crea objetos o instancias */

function Persona(nombre, edad){
    console.log(`se ejecuto esta linea`)

    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${nombre} Edad: ${edad}`)
    }
}

/* new es para indicarle que quiero crear una nueva instancia 
de Persona */ 

const claudia = new Persona(`claudia`, 31);

claudia.imprimir();

const laura = new Persona(`Laura`, 34);

laura.imprimir();



