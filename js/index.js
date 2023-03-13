import { imprimir_todos } from "./cargar-los-todos.js";

imprimir_todos();

function nueva_tarea (){
    data_todo_list.push(
        {
            id : "4",
            mensaje : "Arreglar la cama",
            estado: true
        }
    );

    document.querySelector(".todo_list").innerHTML = "";
    imprimir_todos();

    document.querySelector(".modal").classList.remove("activar");
}

document.querySelector(".btn-tarea").addEventListener("click",nueva_tarea);