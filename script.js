function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Fecha o menu quando um link é clicado
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-links').classList.remove('active');
    });
});

