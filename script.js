console.log("La Consola Funciona")

document.querySelectorAll(".boton");
  console.log("Se Registro Un Click");


const boton = document.querySelectorAll(".boton");
const mostrarComentario = document.querySelectorAll(".oculto");


boton.forEach(function(elemento, indice){
    elemento.addEventListener("click", function(){
        mostrarComentario[indice].classList.toggle("mostrar");

if (mostrarComentario[indice].classList.contains("mostrar")) {
    elemento.innerHTML = "Ocultar"
} else {
    elemento.innerHTML = "Información de Contacto"
}

    });
})


let toggle=document.getElementById('toggle');
let l_toggle=document.getElementById('l_toggle');
toggle.addEventListener('change' ,(event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle('apple');
    if(checked==false){
        l_toggle.style.color="white"
    }else{
        l_toggle.style.color="black"
      
    }
     
})


/* 
* JSON A Modo de Ejemplo En la Consola
*/
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))