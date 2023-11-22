/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var resultado = x+y
   return (resultado);
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var resultado2 = x-y
   return (resultado2);
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var resultado3 = x/y
   return (resultado3);
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var resultado4 = x*y
   return (resultado4);
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var resultado5 = x % y
   return (resultado5);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
