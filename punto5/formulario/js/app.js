document.getElementById('registroForm').addEventListener('submit', function(event) {
    var nombres = document.getElementById('nombres').value.trim();
    var apellidos = document.getElementById('apellidos').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var sexo = document.getElementById('sexo').value;
    var aceptar = document.getElementById('aceptar').checked;

    var errores = [];

    // Validación de nombres
    if (nombres === '') {
        errores.push({ campo: 'nombres', mensaje: 'Por favor, ingresa tus nombres.' });
    } else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(nombres)) {
        errores.push({ campo: 'nombres', mensaje: 'Por favor, ingresa solo letras en el campo de nombres.' });
    }

    // Validación de apellidos
    if (apellidos === '') {
        errores.push({ campo: 'apellidos', mensaje: 'Por favor, ingresa tus apellidos.' });
    } else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(apellidos)) {
        errores.push({ campo: 'apellidos', mensaje: 'Por favor, ingresa solo letras en el campo de apellidos.' });
    }

    // Validación de teléfono
    if (telefono === '') {
        errores.push({ campo: 'telefono', mensaje: 'Por favor, ingresa tu número de teléfono.' });
    } else if (!/^\d{10}$/.test(telefono)) {
        errores.push({ campo: 'telefono', mensaje: 'Por favor, ingresa un número de teléfono válido (10 dígitos numéricos).' });
    }

    // Validación de correo electrónico
    if (correo === '') {
        errores.push({ campo: 'correo', mensaje: 'Por favor, ingresa tu correo electrónico.' });
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
        errores.push({ campo: 'correo', mensaje: 'Por favor, ingresa un correo electrónico válido.' });
    }

    // Validación de sexo
    if (sexo === '') {
        errores.push({ campo: 'sexo', mensaje: 'Por favor, selecciona tu sexo.' });
    }

    // Validación de aceptar términos
    if (!aceptar) {
        errores.push({ campo: 'aceptar', mensaje: 'Por favor, acepta enviar el formulario.' });
    }

    if (errores.length > 0) {
        event.preventDefault();
        mostrarErrores(errores);
    }
});

function mostrarErrores(errores) {
    errores.forEach(function(error) {
        var campo = document.getElementById(error.campo);
        var mensajeError = document.createElement('p');
        mensajeError.className = 'error-mensaje'; // Agregamos la clase para el estilo
        mensajeError.textContent = error.mensaje;
        campo.parentNode.insertBefore(mensajeError, campo.nextSibling);
    });
}