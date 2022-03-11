//ejercicio 1
var numero= Number(prompt("ingresa un número divisible entre 2"))

if (numero %2===0){
    alert("El número " + numero + " es divisible entre 2")
} else {
    alert("El número " + numero + " no es divisible entre 2")
}

//ejercicio 2
var numero= Number(prompt("ingresa un número que sea par"))
if (numero %2===0) {
    alert("el número " +numero+ " sí es par")
    
} else {
    alert("el número " +numero+ " no es par")
}

//ejercicio 3
var numeroGanador = Number(prompt("ingresa un n{umero"))

if (numeroGanador === "1000" ) {
    console.log("Ganaste un premio")

} else {
    console.log("Lo siento, el número ganandor no fue el que introduciste, suerte para la próxima")
}

//ejercicio 4
var numero1 = Number(prompt("ingresa un numero"))
var numero2 = Number(prompt("ingresa otro numero"))

if (numero2 < numero1) {
    console.log(numero2)
} else {
    console.log(numero1)
}


//ejercicio 5
var numero1 = Number(prompt("ingresa un numero"))
var numero2 = Number(prompt("ingresa otro numero"))
var numero3 = Number(prompt("ingresa un número más"))

        if (numero1<numero2 && numero2<numero3) {
    console.log(numero3)

} else if (numero1<numero3 && numero3<numero2) {
    console.log(numero2)

}else if (numero2<numero1 && numero1<numero3) {
    console.log(numero3)

}else if (numero2<numero3 && numero3<numero1) {
    console.log(numero1)
    
}else if (numero3<numero1 && numero1<numero2) {
    console.log(numero2)

}else if (numero3<numero2 && numero2<numero1) {
    console.log(numero1)    


} else if (numero2==numero3 && numero3<numero1) {
    console.log(numero1)

}else if (numero2==numero1 && numero1<numero3) {
    console.log(numero3)

}else if (numero1==numero2 && numero2<numero3) {
    console.log(numero3)
    
}else if (numero1==numero3 && numero3<numero2) {
    console.log(numero2)
     
}else   {
         
}


