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


    // Inicializa a cena
    const scene = new THREE.Scene();

    // Configuração da câmera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Criação de um cubo para representar o personagem (substitua pelo modelo 3D)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Função de animação
    function animate() {
        requestAnimationFrame(animate);

        // Rotação do cubo
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animate();

