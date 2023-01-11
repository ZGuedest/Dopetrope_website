let num1 = parseInt(prompt('Entre el primer numero'));
let num2 = parseInt(prompt('Entre el segundo numero'));



rango(num1,num2);

function rango(num1, num2 ) {

    for( let i=num1; i<=num2; i++){
        console.log(i);
        alert(i);
    }

  }