
let button = document.getElementById("form_button");

button.addEventListener("click", function(event) {


    event.preventDefault();

    let zu = parseInt(document.getElementById("textName").value);
    let mi = parseInt(document.getElementById("textEmail").value);

    let result = " ";

    for(let i=zu; i <=mi; i++){

    result+=i+ " ";

    }


    document.getElementById("w").innerHTML = result;

    
})
