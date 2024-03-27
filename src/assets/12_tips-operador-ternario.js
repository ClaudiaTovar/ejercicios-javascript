//tips operador ternario

const elMayor = (a, b) => ((a > b )? a : b);

console.log(elMayor(2, 4))

/*se leeria si a es mayor a b retorna a, si no, 
retorna b */

let miembro = false
 const tieneMembresia = (miembro) => (miembro) ? `dos dolares` : `10 dolares`;
 console.log(tieneMembresia(miembro))

//operador ternario con varias evaluaciones

const nota = 84;
const grado = nota >= 95? "a+" :
            nota >= 90 ? "a":
            nota >= 85 ? "b+":
            nota >= 80 ? "b":
            nota >= 75 ? "c+":
            nota >= 70 ? "c": "f";

console.log({nota, grado});
