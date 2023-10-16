// Adicione este trecho ao seu arquivo JavaScript (script.js)

// Função para atualizar a cor da barra de navegação com base na seção visível
function updateNavbarColor() {
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            header.style.backgroundColor = section.dataset.bgColor;
        }
    });
}

// Atualiza a cor da barra de navegação ao carregar e ao rolar a página
window.addEventListener('load', updateNavbarColor);
window.addEventListener('scroll', updateNavbarColor);


document.addEventListener('DOMContentLoaded', function() {
    const parallax = document.querySelector('.parallax');
    let prevScrollPos = window.pageYOffset;
    
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        parallax.style.backgroundPositionY = (prevScrollPos - currentScrollPos) * 0.5 + 'px';
        prevScrollPos = currentScrollPos;
    }
});


window.addEventListener("scroll", function(){
    let header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Adicione aqui a lógica para autenticar o usuário
    
    // Exemplo simples para exibir a mensagem
    document.getElementById("registrationMessage").textContent = "Usuário cadastrado com sucesso!";
});
