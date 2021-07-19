//declarando variables para los controles
var cboDistrito = document.getElementById("cboDistrito");
//creamos un procedimiento para cargar el combo
function CargarDistrito() {
    //declaramos una variable para el numero de filas
    var i = 0;
    //se selecciona la tablade la base de datos
    var db = database.ref().child("distrito");
    db.once("value", function (snapshot) {
        if (snapshot.exists()) {
            // Loop para recorrer los datos de Firebase Realtime Database
            snapshot.forEach(function (data) {
                //capturo la informacion de la tabla
                var cod = data.key;
                var nom = data.val().nombre;
                //creamos un elemento de tipo option
                var options = document.createElement("option");
                //agregamos el nombre y el codigo al option
                options.text = nom;
                options.value = cod;
                //agregamos los options al combo
                cboDistrito.add(options);
                i++;
            });
        }
    });
}
//llamamos al procedimiento cuando carga la pagina
window.onload = CargarDistrito; 
