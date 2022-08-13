/*
3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda
cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista,
cada elemento ingresado en la lista debe poder ser eliminado con un botón creado
para ese ﬁn.

*/
var boton = document.getElementById("accioar");
    var input = document.getElementById("inputusuario");
    var listafunc = document.querySelector("ul");
    var botonDelete = document.getElementById("borrar");
    
    
    boton.addEventListener("click", function() {
        var nuevoli = document.createElement("li");
        var textoli = document.createTextNode(input.value);
        nuevoli.appendChild(textoli);
        listafunc.appendChild(nuevoli);
    });
    
    function remove_child() {
      var list = document.getElementById('list');
      var item = listafunc.lastElementChild;
      list.removeChild(item);
    }