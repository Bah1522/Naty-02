const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animação simples do ícone (opcional)
    const bars = document.querySelectorAll('.bar');
    bars[0].classList.toggle('rotate1');
    bars[1].classList.toggle('hide');
    bars[2].classList.toggle('rotate2');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    navLinks.classList.remove('active');
}));

