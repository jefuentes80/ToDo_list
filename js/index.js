// LIBRERÍA
import { data_todo_list } from "./data.js";
import { item_component } from "./item-component.js";

// Función para imprimir la lista de tareas
let caja_de_todos = document.querySelector(".todo_list");

function imprimir_todos (){
    
    data_todo_list.forEach((element, indice) => {

        let todo = document.createElement("div");

        todo.innerHTML = item_component(indice);

        caja_de_todos.appendChild(todo)
        
    });
}

imprimir_todos();



// CREAR UNA NUEVA TAREA

function nueva_tarea (){
    data_todo_list.push("Nueva tarea");
    caja_de_todos.innerHTML = "";
    imprimir_todos();
}

let boton = document.querySelector("#btn-todo");
boton.addEventListener("click", nueva_tarea);
