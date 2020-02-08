



function suma(a, b) {
    let resultado = a + b;
    console.log(resultado)
}
suma(4, 7);

//ejercicio 5
function evaluate (numero){
    if (numero >= 1){
        return "Positivo";
    
    }   else if (numero == 0){
        return "Cero";
    } 
    else {
        return "Negativo";
    }
}




//ejercicio 6
let pares = [];
for (let i = 0; i<= 100; i+=2){
    pares.push(i);
}



//ejercicio 7

function letter(letra) {
    console.log(letra == typeof letra);

    if (typeof letra != 'number') {
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u')
            console.log("Vocal")
        else {
            console.log("Consonante")

        } else {
            console-log('Caracter invalido')
        }


    }
}

letter ('b');



//ejercicio 8
function multiple (numero){
    if (numero% 5 == 0  && numero% 11 == 0){
        console.log (true);
    }else {
        console.log(false);
    }
    
}