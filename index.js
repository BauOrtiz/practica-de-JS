
/*
let ingreso=parseInt (prompt("Ingrese un numero")) 
let limite=parseInt (prompt("Ingrese cuantas veces lo quiere multiplicar"))

for (let i = 0; i <= limite; i=i + 1){

    let resultado= ingreso * i

    console.log(ingreso + "X" + i + "=" + resultado);
} */


let productos=parseInt (prompt("Ingrese cuantos productos va a comprar"));
let precio= 0;
let stock= 5;
for (let i = 1; i <= productos; i++){
    let precioIngresado=parseInt(prompt("Ingrese el precio del producto" + i));
    precio += precioIngresado;
}
console.log(precio);