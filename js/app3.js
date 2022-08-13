/*
3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda
cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista,
cada elemento ingresado en la lista debe poder ser eliminado con un botón creado
para ese ﬁn.

*/
let boton = document.getElementById("accioar");
    let input = document.getElementById("inputusuario");
    let listafunc = document.querySelector("ul");
    let botonDelete = document.getElementById("borrar");
    
    
    boton.addEventListener("click", function() {
        let nuevoli = document.createElement("li");
        let textoli = document.createTextNode(input.value);
        nuevoli.appendChild(textoli);
        listafunc.appendChild(nuevoli);
    });
    
    function remove_child() {
      let list = document.getElementById('list');
      let item = listafunc.lastElementChild;
      list.removeChild(item);
    }