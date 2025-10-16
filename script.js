// Função para toggle do menu (mantida como antes)
const toggleMenu = () => {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.setAttribute('aria-expanded', navList.classList.contains('show'));
};

// Adiciona rolagem suave para links de navegação com offset
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Previne o comportamento padrão
        const targetId = this.getAttribute('href').substring(1);  // Pega o ID (ex.: "about")
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerOffset = 70;  // Ajuste isso para a altura real do seu header (em pixels)
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'  // Rolagem suave
            });
        }
    });
});

// As funções restantes (openProjectModal, closeModal, etc.) permanecem as mesmas
const openProjectModal = (project) => {
    const modal = document.getElementById('projectModal');
    const title = document.getElementById('modalTitle');
    const description = document.getElementById('modalDescription');
    if (project === 'EcoLink') {
        title.innerHTML = 'EcoLink';
        description.innerHTML = 'App que conecta cooperativas de reciclagem a clientes residenciais.';
    } else if (project === 'EduLivre') {
        title.innerHTML = 'EduLivre';
        description.innerHTML = 'Plataforma de cursos gratuitos para jovens periféricos.';
    } else if (project === 'Vitrine Criativa') {
        title.innerHTML = 'Vitrine Criativa';
        description.innerHTML = 'Marketplace para artesãos locais com sistema de pagamento integrado.';
    }
    modal.style.display = 'flex';
};

const closeModal = () => {
    document.getElementById('projectModal').style.display = 'none';
};

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
    this.reset();
});

// script.js
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('#hero');
  hero.classList.add('fade-in');
});

// script.js
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Impede envio real

  const nome = document.querySelector('input[type="text"]').value.trim();
  const email = document.querySelector('input[type="email"]').value.trim();
  const mensagem = document.querySelector('textarea').value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos antes de enviar.');
    return;
  }

  alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
  this.reset(); // Limpa o formulário
});

const campos = document.querySelectorAll('input, textarea');

campos.forEach(campo => {
  campo.addEventListener('focus', () => {
    campo.style.boxShadow = '0 0 10px #00ffff';
  });

  campo.addEventListener('blur', () => {
    campo.style.boxShadow = 'none';
  });
});

const botao = document.querySelector('button');

botao.addEventListener('click', () => {
  botao.style.transform = 'scale(0.95)';
  setTimeout(() => {
    botao.style.transform = 'scale(1)';
  }, 150);
});

