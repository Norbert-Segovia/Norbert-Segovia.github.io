// variables para los controles
var txtNom = document.getElementById("txtNom");
var txtApe = document.getElementById("txtApe");
var txtCor = document.getElementById("txtCor");
var btnRegistrar = document.getElementById("btnRegistrar");
//llmamamos a la funcion registrar del Firebase
// function writeUserData(nm, ap, cr) {
//      database.ref('registro/').set({
//          nombre: nm,
//          apellido: ap,
//          correo : cr
//      });
//  }
//crear un procedimiento para limpiar
function Limpiar() {
    txtNom.value = "";
    txtApe.value = "";
    txtCor.value = "";
    txtNom.focus();
}
//creamos un procedimiento para mostrar
function Mostrar() {
    //declaramos una variable para el numero de filas
    var i = 0;
    //selecciono el tbody de la tabla donde voy a guardar
    tbody = document.querySelector("#tbRegistro tbody");
    tbody.innerHTML = "";
    //se selecciona la tabla
    var db = database.ref().child("registro");
    db.once("value", function (snapshot) {
    if (snapshot.exists()) {
        // Loop para recorrer los datos de Firebase Realtime Database
        snapshot.forEach(function (data) { 
            var nom = data.val().nombre;
            var ape = data.val().apellido;
            var cor = data.val().correo;
            //declaramos una variable para la fila
            var fila = tbody.insertRow(i);
            //declaramos variables para los titulos
            var titulonombre = fila.insertCell(0);
            var tituloapellido = fila.insertCell(1);
            var titulocorreo = fila.insertCell(2);
            //agregamos los valores
            titulonombre.innerHTML = nom;
            tituloapellido.innerHTML = ape;
            titulocorreo.innerHTML = cor;
            tbody.appendChild(fila);
            i++;
        });
    }
    });
}
//llamamos a la funcion mostrar cuando cargue la pagina
window.onload = Mostrar;
//creamos un procedimiento para registrar
function Registrar() {
    if (txtNom.value == "" || txtNom.value == null) {
        alert("Ingrese el nombre");
        txtNom.focus();
    } else if (txtApe.value == "" || txtApe.value == null) {
        alert("Ingrese el apellido");
        txtApe.focus();
    } else if (txtCor.value == "" || txtCor.value == null) {
        alert("Ingrese el correo");
        txtCor.focus();
    } else {
    //capturando valores
        var nom = txtNom.value;
        var ape = txtApe.value;
        var cor = txtCor.value;
    //llamamos a la funcion del Firebase
    //seleccionamos la tabla
    //si la tabla no existe automaticamente el firabase la crea
    var db = database.ref("registro");
    //asignamos los valores a la tabla que ha sido creada
    var registros = db.push();
    //los valores se deberan de pasar con la estructura de JSON
    registros.set({
        nombre: nom,
        apellido: ape,
        correo: cor,
    });
    alert("Se registro los datos");
    Limpiar();
    Mostrar();
    }
}
//llamamos a la funcion registrar en el boton
btnRegistrar.addEventListener("click", Registrar);