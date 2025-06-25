document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const navToggle = document.createElement('button');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '&#9776;';
    const containerInHeader = header.querySelector('.container');
    if (containerInHeader) {
        containerInHeader.prepend(navToggle);
    } else {
        header.prepend(navToggle);
    }

    const mainNav = document.querySelector('nav'); // Seleciona a tag <nav>
    const navList = document.querySelector('nav ul'); // Seleciona a <ul> dentro da <nav>

    if (navToggle && navList) { // Verifique se ambos os elementos existem
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('active'); // Adiciona/remove 'active' na <ul>
        });

        // Fechar menu ao clicar em um item (em mobile)
        navList.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) { // Apenas em telas pequenas
                    navList.classList.remove('active');
                    // Opcional: Se o seu navToggle mudar de ícone, adicione/remova a classe 'active' nele também
                    // navToggle.classList.remove('active');
                }
            });
        });
    }

    // --- CÓDIGO DO ÁUDIO (ADICIONADO/REINSERIDO) ---
    const backgroundAudio = document.getElementById('background-audio');
    let hasInteracted = false; // Flag para controlar se já houve interação

    function tryPlayAudio() {
        if (backgroundAudio && !hasInteracted) {
            const playPromise = backgroundAudio.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // Autoplay funcionou, ou o play foi iniciado por interação
                    console.log("Áudio começou a tocar.");
                    hasInteracted = true; // Marca que já interagimos e o áudio está tocando
                    // Remove os listeners para evitar execuções duplicadas
                    document.removeEventListener('scroll', tryPlayAudio);
                    document.removeEventListener('click', tryPlayAudio);
                    // Opcional: Se você quiser remover também um listener para toque (touchstart)
                    // document.removeEventListener('touchstart', tryPlayAudio);
                }).catch(error => {
                    // Autoplay bloqueado ou play falhou por algum motivo
                    console.log("Áudio não pôde ser reproduzido automaticamente, esperando interação.");
                    // Continua esperando por interação
                });
            }
        }
    }

    // Adiciona listeners para interações comuns
    // O áudio tentará tocar no primeiro clique ou rolagem da página
    document.addEventListener('scroll', tryPlayAudio);
    document.addEventListener('click', tryPlayAudio);
    // Opcional: Para dispositivos touch, um 'touchstart' pode ser mais rápido que 'click'
    // document.addEventListener('touchstart', tryPlayAudio);
});

/*
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
*/