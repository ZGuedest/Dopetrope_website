
 //let button= document.getElementById("form_button");

let button= document.getElementById("form_button");


button.addEventListener("click", (event)=> {

    event.preventDefault();
    
    let zu = parseInt(document.getElementById("textName").value);
    let mi = parseInt(document.getElementById("textEmail").value);


     let result=" ";

     for( let i=zu; i<=mi; i+=3){

        result+=i+ " ";
       
     }
    //  document.getElementById("textArea").value=result;
 
     document.getElementById("w").innerHTML=result;


})




