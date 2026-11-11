const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
}

const slides = [
  {
    eyebrow: "YOUR MOMENT. YOUR GLOW.",
    title: "Beauty Begins<br>With <em>You.</em>",
    subtitle: "A little self-care goes a long way. Come glow with us.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2200&q=90",
    position: "center 48%"
  },
  {
    eyebrow: "CARE THAT MAKES YOU SHINE",
    title: "Feel Beautiful.<br><em>Feel Confident.</em>",
    subtitle: "Thoughtful treatments, expert hands and time just for you.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=2200&q=90",
    position: "center 42%"
  },
  {
    eyebrow: "A FRESH TAKE ON SELF-CARE",
    title: "Your Glow-Up<br><em>Starts Here.</em>",
    subtitle: "Refresh your look and leave feeling like your best self.",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=2200&q=90",
    position: "center 38%"
  }
];

const heroImage = document.getElementById("heroImage");
if (heroImage) {
  let active = 0;
  const title = document.getElementById("heroTitle");
  const eyebrow = document.getElementById("eyebrow");
  const subtitle = document.getElementById("heroSubtitle");
  const count = document.getElementById("currentSlide");
  const dots = [...document.querySelectorAll(".dot")];

  function showSlide(index) {
    active = (index + slides.length) % slides.length;
    const slide = slides[active];
    heroImage.style.backgroundImage = `url("${slide.image}")`;
    heroImage.style.backgroundPosition = slide.position;
    title.innerHTML = slide.title;
    eyebrow.textContent = slide.eyebrow;
    subtitle.textContent = slide.subtitle;
    count.textContent = String(active + 1).padStart(2, "0");
    dots.forEach((dot, i) => dot.classList.toggle("active", i === active));
  }

  document.querySelector(".prev")?.addEventListener("click", () => showSlide(active - 1));
  document.querySelector(".next")?.addEventListener("click", () => showSlide(active + 1));
  dots.forEach(dot => dot.addEventListener("click", () => showSlide(Number(dot.dataset.slide))));
  showSlide(0);
}
