

let button= document.getElementById("form_button");


button.addEventListener("click",function(event){
    event.preventDefault();
    let num1 = parseInt(document.getElementById("textName").value);
    let num2 = parseInt(document.getElementById("textEmail").value);

    let result=" ";

    for( let i=num1; i<=num2; i++){
        result+=i;
    }
    document.getElementById("textArea").value=result;

})

