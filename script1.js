// Ejercicio 1
//console.log( "EJERCICIO 1 ");
//console.log("_________________________");
// let edad = prompt("Ingrese edad");
//
// console.log("Su edad es " + edad);


//Ejercicio 2
// console.log( "EJERCICIO 2 ");
// console.log("_________________________");
// let  n1 = parseInt(prompt("numero 1 "));
// let n2 = parseInt(prompt("numero 2"));
// let n3 = parseInt(prompt("numero 3"));
//
// var resultado = n1 + n2 + n3;
// console.log("SUMA = n1 + n2 + n3 = " + resultado);
//
//
// resultado = n1 - n2 - n3 ;
// console.log("RESTA  n1 - n2 - n3 = " + resultado);
//
// resultado = n1 / n2 / n3 ;
// console.log("DIVISON  n1/n2/n3 = " + resultado);
//
// resultado = n1 * n2 * n3 ;
// console.log("PRODUCTO  n1 * n2 * n3 = " + resultado);

// //EJERCICIO 3
// console.log( "EJERCICIO 3 ");
// console.log("_________________________");
//
// let edad = parseInt(prompt("Ingrese edad : "));
//
// if (edad>=1){
//
//   if (edad>60) {
//     console.log("Usted es jubilado :c");
//   }
//   else {
//     console.log("A seguir laburando :c");
//   }
// }else {
//   console.log("La edad no puede ser cero o negativa");
// }
//


// ///EJERCICIO 4
// console.log( "EJERCICIO 5 BUCLES FOR ");
// console.log("_________________________");
//
// function contador() {
//   for (var i = 0; i <= 10; i++) {
//     console.log(i);
//   }
// }
//
//
// contador();


// //funciones
// console.log("FUNCIONES EJERCICIO 1 ");
// console.log("------------------");
//
// function cambiar_Color(op) {
//   if (op ==0) {
//   document.bgColor = "red";
//   }
//   if (op ==1) {
//   document.bgColor = "blue";
//   }
//   if (op ==2) {
//   document.bgColor = "yellow";
//   }
//   if (op ==3) {
//   document.bgColor = "black";
//   }
//   if (op ==4) {
//   document.bgColor = "white";
//   }
// }


//MATRICES
console.log("MATRICES");
console.log("----------------------");



function cargar_defecto(nombres) {
  console.log("ENTRA AL CARGAR");
  nombres[0] = "Juan";
  nombres[1] = "Carlos";
  nombres[2] = "Jose";
  nombres[3] = "Mendoza";
  nombres[4] = "Riki Martin";
  nombres[5] = "menem";
}
function carga(lista,n1){
  lista[lista.length] = n1;
}




function busqueda(lista,n1) {
  for (var i = 0; i < lista.length; i++) {
    if (n1 == lista[i]) {
      return true;
    }
  }
  return false;
}

function carga_manual(lista) {

  var n1 = prompt("Ingrese Nombre para cargar");
  var v1 = busqueda(lista,n1);
  if (v1) {
    alert("El nombre ya existe");

  }else {
    alert("El nombre no esta en la lista. Se agregara");
    carga(lista,n1);
  }

}
function barrido(lista) {
  for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}

var nombres = new Array();
var a = 0;
cargar_defecto(nombres);
barrido(nombres);
while (a==0) {
  carga_manual(nombres);
  a = prompt("Seguir cargando? 0 = si / 1=no");
}
barrido(nombres);
