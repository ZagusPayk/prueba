const form = document.getElementById('form')
const nombres = document.getElementById('nombres')
const email = document.getElementById('email')
const mensaje = document.getElementById('mensaje')
const mensaje2 = document.getElementById('mensaje2')


document.querySelectorAll('.boton').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const paragraph = document.getElementById(targetId);
        paragraph.classList.toggle('hideText');
    });
});
{}


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});