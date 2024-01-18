// JavaScript Document

$(document).ready(function () {
    var contador = 1;

    // Menú responsive para móvil
    $('.menu_bar').click(function () {
        if (contador === 1) {
            $('nav').animate({ left: '0' });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({ left: '-100%' });
        }
    });

    // Control de formulario de contacto
    $('#contactForm').submit(function (event) {
        event.preventDefault();

        var nombre = $('#nombre').val().trim();
        var email = $('#email').val().trim();
        var mensaje = $('#mensaje').val().trim();
 // Si no se responde nada, que salga la alerta de que debe rellenar los campos
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, complete todos los campos del formulario.");
            return;
        }
 // Si el correo electrónico no lleva @ y su terminación, saldrá una alerta de que no es válido
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, ingrese una dirección de correo electrónico válida.");
            return;
        }

        alert("Formulario enviado con éxito!");
    });
});





