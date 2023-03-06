function modal(){
    document.querySelector(".modal").classList.add("activar");
}

let boton = document.querySelector("#btn-todo");
boton.addEventListener("click", modal);