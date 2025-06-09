document.addEventListener('DOMContentLoaded', () => {
    // Scroll suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    console.log('Portfólio carregado com sucesso! Bem-vindo(a), visitante!');
});