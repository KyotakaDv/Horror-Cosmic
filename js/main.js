document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.createElement('button');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '&#9776;'; // Ícone de hambúrguer
    document.querySelector('header').prepend(navToggle);

    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um item (em mobile)
    navMenu.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Adicionar estilos para .nav-toggle e .nav-menu.active no CSS
});
