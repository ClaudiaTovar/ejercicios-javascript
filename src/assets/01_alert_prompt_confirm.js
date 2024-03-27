/* la etiqueta <script> se coloca al final antes de cerrar
la etiqueta </body> porque debe cargarse primero todo el html
para empezar a cargar el codigo js */

// formas de ingreso de informacion del usuario

alert("hola a todos");

let nombre = prompt("ingresa tu nombre"); /*el prompt
me solicita informacion que yo puedo guardar en una variable, 
siempre retorna un string y es una funcion */

alert(`Entiendo que tu nombre es ${nombre}`) /*el 
alert me muestra un mensaje*/

let seleccionUsuario = confirm("esta seguro de borrar esto?") /*este me 
abre una ventana con opciones de cancelar y ok, tambien
se puede guardar la seleccion en una variable con la que puedo trabajar */

alert(`Entiendo que tu seleccion es ${seleccionUsuario}`)

/* alert, prompt, confirm son metodos del objeto window */

