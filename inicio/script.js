let lastScroll = 0;
const header = document.querySelector(".top-header");

if (header) {
  window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    header.style.top = currentScroll > lastScroll ? "-50px" : "0";
    lastScroll = currentScroll;
  });
}

// BOTÃO SOBRE
function verMais() {
  window.location.href = "sobre.html";
}

// MODAL
function openModal() {
  document.getElementById("modal").style.display = "block";
}

const track = document.querySelector(".carousel-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const items = document.querySelectorAll(".testimonial");
let index = 0;

function getVisibleItems() {
  return window.innerWidth <= 768 ? 1 : 3;
}

function updateCarousel() {
  const itemWidth = track.clientWidth / getVisibleItems();
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

// NEXT
nextBtn.addEventListener("click", () => {
  const visible = getVisibleItems();

  if (index >= items.length - visible) {
    index = 0; // volta pro início
  } else {
    index++;
  }

  updateCarousel();
});

// PREV (CORRIGIDO)
prevBtn.addEventListener("click", () => {
  const visible = getVisibleItems();

  if (index <= 0) {
    index = items.length - visible; // vai pro final
  } else {
    index--;
  }

  updateCarousel();
});

// AJUSTE AO REDIMENSIONAR
window.addEventListener("resize", () => {
  index = 0;
  updateCarousel();
});

document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;

      // Opcional: Fecha outros itens se quiser que apenas um fique aberto por vez
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Alterna a classe active no item clicado
      item.classList.toggle('active');
    });
  });
});
const accordion = document.querySelectorAll('.accordion-item');
accordion.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    
    // Pegamos o quanto o usuário já scrollou
    const scrollProgress = window.pageYOffset || document.documentElement.scrollTop;
    // Altura da tela do usuário
    const windowHeight = window.innerHeight;
    
    // O ponto onde o efeito REALMENTE começa (50% da altura da tela)
    const startTrigger = windowHeight * 0.5; 

    if (scrollProgress > startTrigger) {
        // Quanto scrollamos APÓS o gatilho
        const activeArea = scrollProgress - startTrigger;

        // CÁLCULO DO ZOOM: 
        // 1 é o tamanho normal. 
        // O divisor (500) controla a velocidade. Menor = mais rápido.
        const zoom = 1 + (activeArea / 500);
        
        // CÁLCULO DA OPACIDADE:
        // Começa em 1 e vai diminuindo até 0
        const fade = 1 - (activeArea / 400);

        // APLICAÇÃO DOS ESTILOS (Corrigido)
        heroContent.style.transform = `scale(${zoom})`;
        heroContent.style.opacity = Math.max(0, fade);
    } else {
        // Mantém o estado original se estiver acima da metade
        heroContent.style.transform = "scale(1)";
        heroContent.style.opacity = "1";
    }
});

// areas animation on scroll
function setupAreasAnimation() {
    const cards = document.querySelectorAll('.area-card');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        cards.forEach(card => observer.observe(card));
    } else {
        // fallback for old browsers
        cards.forEach(card => card.classList.add('visible'));
    }
}

document.addEventListener('DOMContentLoaded', setupAreasAnimation);