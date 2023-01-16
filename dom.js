

var foto = document.getElementsByTagName("img")[0];
foto.addEventListener("click",function (){
     alert("graciasssssssss");
     if(this.src=="./img/pic02.jpg"){
        this.src="./img/pic08.jpg";
     }else{
        this.src="./img/pic02.jpg";

     }
});
