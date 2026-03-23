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