//declarando variables para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnIngresar=document.getElementById("btnIngresar");
//creamos un procedimiento para ingresar
function Ingresar(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingrese su correo");
    txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese la contraseña")
    }else{
    //capturando valores   
    var cor=txtCor.value;
    var con=txtCon.value;
    //llamamos ala funcion de Firebase para validar el usuario
    auth.signInWithEmailAndPassword(cor, con)
    .then((userCredential) => {
        alert("Bienvenidos al Sistema");
        //nos dirigimos ala pagina 11
        window.location="pagina11.html";
    })
    .catch((error) => {
        alert("Usuario o clave no valida");
    // var errorCode = error.code;
    // var errorMessage = error.message;
    });
    }
}
//llamamos al procedimiento para ingresar
btnIngresar.addEventListener("click",Ingresar); 