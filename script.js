// ======================
// ELEMENTS
// ======================

const startBtn = document.getElementById("start-btn");
const intro = document.getElementById("intro");
const experience = document.getElementById("experience");
const music = document.getElementById("bg-music");

// ======================
// START BUTTON
// ======================

startBtn.addEventListener("click", () => {

  // PLAY MUSIC
  music.play();

  // HIDE INTRO
  intro.style.opacity = "0";
  intro.style.pointerEvents = "none";

  // SHOW EXPERIENCE
  experience.style.opacity = "1";

  // ENABLE SCROLL
  document.body.style.overflowY = "auto";

});

// ======================
// SCROLL ANIMATIONS
// ======================

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

fadeElements.forEach((el) => {

  observer.observe(el);

});

// ======================
// CURSOR LIGHT
// ======================

const cursorLight = document.querySelector(".cursor-light");

document.addEventListener("mousemove", (e) => {

  cursorLight.style.left = e.clientX + "px";
  cursorLight.style.top = e.clientY + "px";

});

// ======================
// SECRET HOVER
// ======================

const hoverMessage = document.querySelector(".hover-message");

hoverMessage.addEventListener("mouseenter", () => {

  hoverMessage.innerText =
  "Love is always dangerous ✨";

});

hoverMessage.addEventListener("mouseleave", () => {

  hoverMessage.innerText =
  "hover me ✨";

});

// ======================
// CLICK PARTICLES
// ======================

document.addEventListener("click", (e) => {

  const particle = document.createElement("div");

  particle.classList.add("click-particle");

  particle.style.left = e.clientX + "px";
  particle.style.top = e.clientY + "px";

  document.body.appendChild(particle);

  setTimeout(() => {

    particle.remove();

  }, 1000);

});

// ======================
// CONSOLE SECRET
// ======================

console.log("SECRET_01 initialized ✨");
