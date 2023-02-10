var form = document.getElementById('accessForm');
var clave = document.getElementById('pass');
var confirmacionClave = document.getElementById('pass2');

form.noValidate = true;

//comprobación de datos cada vez que se intente enviar el formulario
form.onsubmit = function (e) {
    e.preventDefault();
    this.reportValidity();

    //bucle para comprobar cada uno de los campos del formulario
    for (i = 0; i < form.length - 1; i++) {
        if (!form[i].checkValidity()) {

            isNotValid(i);

            if (i == 1 && form[i].value != "")
                setMensaje(i, "Email inválido")
            else if (i == 2 && form[i].value != "")
                setMensaje(i, "No debe tener menos de 8 caracteres")
            else
                setMensaje(i, "Rellene este campo")
        }
        //comprueba si las contraseñas no coinciden
        else if (i == 3 && clave.value !== confirmacionClave.value) {
            isNotValid(i);
            setMensaje(i, "Las contraseñas no coinciden")
        }
        else {
            isValid(i);
        }
    }

    if (this.checkValidity() && clave.value === confirmacionClave.value) return alert("¡Inscrito correctamente!");

}

//da formato a los campos erroneos
function isNotValid(index) {
    form[index].classList.remove('input-success')
    form[index].classList.add('input-error');
    form[index].style.borderColor = "red"
    document.getElementsByClassName("mensaje-" + index)[0].style.visibility = "visible";
}

//da formato a los campos validados con éxito
function isValid(index) {
    form[index].classList.remove('input-error')
    form[index].classList.add('input-success')
    form[index].style.borderColor = "green"
    document.getElementsByClassName("mensaje-" + index)[0].style.visibility = "hidden";
}

//define mensaje de error
function setMensaje(index, mensaje){
    document.getElementsByClassName("mensaje-" + index)[0].textContent = mensaje;
}