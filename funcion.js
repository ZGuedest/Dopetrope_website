// let num1 = parseInt(document.getElementById("textName").value);   //parseInt(prompt('Entre el primer numero'));
// let num2 = document.getElementById('textEmail').value;//parseInt(prompt('Entre el segundo numero'));
// let num1 = parseInt(document.getElementById("textName").value);

let button= document.getElementById('formButton');

button.addEventListener('click', function(){
    // alert(num1);

    let num2 = parseInt(document.getElementById('textEmail').value);//parseInt(prompt('Entre el segundo numero'));
    let num1 = parseInt(document.getElementById("textName").value);
    let result= " ";
    // function rango(num1, num2 ) {

    for( let i=num1; i<=num2; i++){
        console.log(i);
        // alert(i);
        result += String(i);
    }

    // alert(result);

    let mensaje= document.getElementById('textMessage');
    mensaje.value=result;
    debugger


    
    // }


});


// rango(num1,num2);

 