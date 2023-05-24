// Abrir animação

if (window.SimpleAnime) {
  new SimpleAnime();
}

// Links Internos

const linksInternos = document.querySelectorAll(".js-menu a[href^='#'");

function scrollToPlace(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const scrollY = section.offsetTop;
  window.scrollTo({
    top: scrollY,
    behavior: "smooth",
  });
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToPlace);
});

// Scroll Animation

const sections = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.6;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isVisibleSection = sectionTop - windowMetade < 0;
    if (isVisibleSection) {
      section.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", animaScroll);
