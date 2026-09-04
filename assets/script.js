const usuarios = [
    {
        correo:"choripan@duoc.cl",
        contrasena:"Hola1233#" 
    }
];

function iniciarSesion() {
    const correoIngresado = document.getElementById("correo").value
    const contrasenaIngresada = document.getElementById("contraseña").value

    for(let usuario of usuarios){

        if(
            usuario.correo === correoIngresado &&
            usuario.contrasena === contrasenaIngresada
        ){
            window.location.href = "menu.html";
            return;

        }
    }
    
    window.location.href = "formulario.html";
    
}

function registrarUsuario() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("email").value;
    const contrasena = document.getElementById("contrase").value;
    const confirmar = document.getElementById("confirmar").value;
    const telefono = document.getElementById("telefono").value;
    const generosSeleccionados = document.querySelectorAll('input[name="genero"]:checked');



if(nombre.trim() ===""){
    alert("Ingrese su nombre completo");
    return;
}

if(nombre.length >100){
    alert("El nombre no debe tener mas de 100 caracteres");
    return;
}

if(correo.length > 60){
    alert("El correo no debe tener mas de 60 caracteres");
    return;
}

if (!/^[^\s@]+@duoc\.cl$/.test(correo)) {
    alert("El correo debe tener el formato usuario@duoc.cl");
    return;
}

for (let usuario of usuarios){
    if(usuario.correo.toLowerCase() === correo.toLowerCase()){
        alert("Este correo ya existe");
        return;
    }
}

if (contrasena.length <10){
    alert("La contraseña no debe tener menos de 10 caracteres");
    return;
}

if (!/[A-Z]/.test(contrasena)) { 
    alert("La contraseña debe tener al menos una letra mayuscula"); 
    return; 
}

if (!/[a-z]/.test(contrasena)) { 
    alert("La contraseña debe tener al menos una letra minuscula");
    return; 
}

if (!/[0-9]/.test(contrasena)) { 
    alert("La contraseña debe tener al menos un numero");
    return; 
}

if (!/[@#$%]/.test(contrasena)) {
    alert("La contraseña debe tener al menos un caracter especial");
    return;
}

if(contrasena !==confirmar){
    alert("La contraseña no es igual");
    return;
}

if (generosSeleccionados.length !== 1) {
    alert("Debe seleccionar un genero favorito");
    return;
}


const nuevoUsuario = {
    nombre: nombre,
    correo: correo,
    contrasena: contrasena,
    telefono: telefono
};
usuarios.push(nuevoUsuario);
alert("Usuario registrado correctamente");
window.location.href = "menu.html";

}






const btnInicio = document.getElementById("btnInicio");

if (btnInicio) { 
    btnInicio.addEventListener("click", iniciarSesion); 
}

const btnRegistro = document.getElementById("btnRegistro");
if (btnRegistro) { 
    btnRegistro.addEventListener("click", registrarUsuario); 
}


