
 //let button= document.getElementById("form_button");

let button= document.getElementById("form_button");
let check = document.getElementById("polit_datos");

check.addEventListener("change", (event)=>{

    if(check.checked==true){
        button.disabled=false;
    }
    else{
        button.disabled=true;
    }  
})

button.addEventListener("click", (event)=> {

    event.preventDefault();
    
    let zu = parseInt(document.getElementById("textName").value);
    let mi = parseInt(document.getElementById("textEmail").value);


     let result=" ";

     for( let i=zu; i<=mi; i++){
        result+=i+ " ";
     }

    //  document.getElementById("textArea").value=result;
 
     document.getElementById("w").innerHTML=result;

})




