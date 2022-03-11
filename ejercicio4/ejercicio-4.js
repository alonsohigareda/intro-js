//ejercicio 1

var numero = Number(prompt("ingresa un número y te diré los multiplos de 5 dentro de ese numero"));
var control = 1;
while (control <= numero) {
    if ( control % 5 === 0 ) console.log(control);
    control++;
}

//ejercicio 2

var numero = Number(prompt("ingresa un número y te diré los multiplos de 5 dentro de ese numero"));
var control = 1;

do {

    if (control % 5 === 0) { 
        
        console.log(control)
    }
    control++
} while (control<=numero);

//ejercicio 3

for (var index = 1; index <= 50; index++) {
    if (index %2!==0) {
        console.log(index)
    }
    
}