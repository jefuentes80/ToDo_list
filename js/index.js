// Se importa la función imprimir_todos
import { imprimir_todos } from "./cargar-los-todos.js";

imprimir_todos();


function nueva_tarea (){

    // Recuperarndo el valor de la caja de texto input
    let mensaje = document.querySelector(".texto").value;

    /* 
    * Con el método push agregamos un nuevo elemento a la
    * lista, ya que la lista contiene objetos como elementos
    * los datos ha agregar deben tener el mismo patron
    */

    data_todo_list.push(
        {
            id : "5",
            mensaje : mensaje,
            estado: true
        }
    );

    // limpiamos la lista de todo list anteriores
    document.querySelector(".todo_list").innerHTML = "";
    // Imprime la lista nuevamente
    imprimir_todos();
    // Oculta la ventana modal
    document.querySelector(".modal").classList.remove("activar");
    // Limpia el contenido de la caja de texto
    document.querySelector(".texto").value = " ";
}


document.querySelector(".btn-crear-tarea").addEventListener("click",nueva_tarea);