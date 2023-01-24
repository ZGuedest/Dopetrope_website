


let img1=document.getElementById("img1")
let img2=document.getElementById("img2")
let img3=document.getElementById("img3")

debugger

img1.addEventListener("click", (event)=>{
    describirReceta( img1.id)
})

img2.addEventListener("click", (event)=>{
    describirReceta( img2.id)
})

img3.addEventListener("click", (event)=>{
    describirReceta( img3.id)
})


 function describirReceta( identificador){

     let caja1= document.getElementById("caja1")
     let caja2=document.getElementById("caja2")
     let caja3=document.getElementById("caja3")

     let textCake= "para el cake 4 huevos y 3 de azucar"
     let textMermelada= "para la mermelada 1 huevos y 8 de azucar y 8 fresas"
     let textPastel= "para el pastel  5 frijoles y 4 abejas"
     
     if(identificador=="img1"){
         caja1.innerHTML=textCake
         caja2.innerHTML=" "
         caja3.innerHTML=" "

     }else if(identificador=="img2"){
         caja2.innerHTML=textMermelada
         caja1.innerHTML=" "
         caja3.innerHTML=" "

     }else{
         caja3.innerHTML=textPastel
         caja2.innerHTML=" "
         caja1.innerHTML=" "

     }
 }


