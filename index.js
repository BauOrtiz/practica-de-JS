
/*
let ingreso=parseInt (prompt("Ingrese un numero")) 
let limite=parseInt (prompt("Ingrese cuantas veces lo quiere multiplicar"))

for (let i = 0; i <= limite; i=i + 1){

    let resultado= ingreso * i

    console.log(ingreso + "X" + i + "=" + resultado);
} */

/*Arreglando el commit*/


/*let productos=parseInt (prompt("Ingrese cuantos productos va a comprar"));
let precio= 0;
let stock= 5;
for (let i = 1; i <= productos; i++){
    let precioIngresado=parseInt(prompt("Ingrese el precio del producto" + i));
    precio += precioIngresado;
}
console.log(precio);


let nombre = prompt("Ingrese su nombre")

console.log ("Hola " + nombre)*/

let BotellonXl={
    Nombre: "BotellonXL",
    Litros: "1,9L",
    Precio: "$980",
}
let BotellonM={
    Nombre: "BotellonM",
    Litros: "1L",
    Precio: "$600",
    Recarga: "$300"
}
let BotellaXl={
    Nombre: "Botellaxl",
    Litros: "2L",
    Precio: "$850"
}
let BotellaM={
    Nombre: "BotellaM",
    Litros: "1L",
    Precio: "$550"
}
let BotellaS={
    Nombre:"BotellaS",
    Litros: "500ml",
    Precio: "$300"
}
let Pinta={
    Nombre: "Honey",
    Litros: "750ml",
    Precio: "$270"
}

let Ingresanombre= prompt("Ingrese su nombre o salir para finalizar")
alert("Hola " + Ingresanombre);
let producto=(prompt("Ingrese el productos que valla a comprar"+ "\n" +
+"1 " + Pinta.Nombre +"\n" + "2 " +BotellonXl.Nombre +"\n" +"3 "+ BotellaM.Nombre+ "o ingrese salir para finalizar"))
 
while (producto !== "salir"){
    let Preciototal = ""
    if (producto === "1"|| producto==="2" || producto==="3"){
        switch (producto){
            case "1":
            alert("El precio del producto es de "+Pinta.Precio)
            Preciototal += Pinta.Precio
            break

        }
         producto=(prompt("Ingrese el productos que valla a comprar"+ "\n" +
+"1 " + Pinta.Nombre +"\n" + "2 " +BotellonXl.Nombre +"\n" +"3 "+ BotellaM.Nombre+ "o ingrese salir para finalizar"))
      
    }
    else {
        alert ("Usted no ingreso una opcion valida")
        producto=(prompt("Ingrese el productos que valla a comprar"+ "\n" +
+"1 " + Pinta.Nombre +"\n" + "2 " +BotellonXl.Nombre +"\n" +"3 "+ BotellaM.Nombre+ "o ingrese salir para finalizar"))
    }


    
}