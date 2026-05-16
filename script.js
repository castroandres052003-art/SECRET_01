// =========================
// ELEMENTS
// =========================

const startBtn = document.getElementById("start-btn");

const intro = document.getElementById("intro");

const music = document.getElementById("bg-music");

const experience = document.getElementById("experience");

const cursorLight = document.querySelector(".cursor-light");

const fadeElements = document.querySelectorAll(".fade-up");

const hoverMessage = document.querySelector(".hover-message");

const glow = document.querySelector(".glow");

const body = document.body;

// =========================
// START EXPERIENCE
// =========================

startBtn.addEventListener("click", async () => {
  // PLAY MUSIC

  try {
    music.volume = 0.5;

    await music.play();
  } catch (error) {
    console.log("Music autoplay blocked.");
  }

  // SHOW EXPERIENCE

  experience.classList.add("show-experience");

  // HIDE INTRO

  intro.classList.add("hide-intro");

  // REMOVE INTRO

  setTimeout(() => {
    intro.style.display = "none";
  }, 1600);
});

// =========================
// CURSOR LIGHT EFFECT
// =========================

document.addEventListener("mousemove", (e) => {
  cursorLight.style.left = e.clientX + "px";

  cursorLight.style.top = e.clientY + "px";
});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

// OBSERVE ELEMENTS

fadeElements.forEach((el) => {
  observer.observe(el);
});

// =========================
// HOVER SECRET MESSAGE
// =========================

hoverMessage.addEventListener("mouseenter", () => {
  hoverMessage.innerText = "Love is always dangerous ✨";
});

hoverMessage.addEventListener("mouseleave", () => {
  hoverMessage.innerText = "hover me ✨";
});

// =========================
// GLOW PULSE EFFECT
// =========================

setInterval(() => {
  const randomOpacity = Math.random() * 0.4 + 0.5;

  glow.style.opacity = randomOpacity;
}, 1200);

// =========================
// RANDOM STAR TWINKLE
// =========================

const stars = document.querySelector(".stars");

setInterval(() => {
  const randomBrightness = Math.random() * 0.3 + 0.7;

  stars.style.opacity = randomBrightness;
}, 1500);

// =========================
// CLICK PARTICLE EFFECT
// =========================

document.addEventListener("click", (e) => {
  // CREATE PARTICLE

  const particle = document.createElement("div");

  particle.classList.add("click-particle");

  // POSITION

  particle.style.left = e.clientX + "px";

  particle.style.top = e.clientY + "px";

  // RANDOM SIZE

  const size = Math.random() * 10 + 6;

  particle.style.width = `${size}px`;

  particle.style.height = `${size}px`;

  // APPEND

  body.appendChild(particle);

  // REMOVE

  setTimeout(() => {
    particle.remove();
  }, 1000);
});

// =========================
// PARALLAX EFFECT
// =========================

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // STARS MOVE

  stars.style.transform = `translateY(${scrollY * -0.08}px)`;

  // GLOW MOVE

  glow.style.transform = `translateY(${scrollY * -0.03}px)`;
});

// =========================
// SECRET KEYBOARD COMMAND
// =========================

let typedKeys = "";

document.addEventListener("keydown", (e) => {
  typedKeys += e.key.toLowerCase();

  // LIMIT STRING SIZE

  typedKeys = typedKeys.slice(-20);

  // SECRET COMMAND

  if (typedKeys.includes("sanji")) {
    createSecretPopup("A gentleman never lets a lady feel alone ✨");
  }

  if (typedKeys.includes("secret")) {
    createSecretPopup("Some secrets are worth discovering.");
  }
});

// =========================
// SECRET POPUP FUNCTION
// =========================

function createSecretPopup(message) {
  const popup = document.createElement("div");

  popup.classList.add("secret-popup");

  popup.innerText = message;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add("show-popup");
  }, 50);

  setTimeout(() => {
    popup.classList.remove("show-popup");

    setTimeout(() => {
      popup.remove();
    }, 500);
  }, 3500);
}

// =========================
// SECRET CONSOLE MESSAGE
// =========================

console.log(`

SECRET_01 initialized.

-----------------------------------

Some experiences are worth creating.

Thanks for being here ✨

-----------------------------------

Type:
"sanji"
or
"secret"

-----------------------------------

`);

// =========================
// OPTIONAL SECRET FUNCTION
// =========================

window.reveal = function () {
  createSecretPopup("You found a hidden memory ✨");
};

// =========================
// FLOATING TITLE EFFECT
// =========================

const title = document.querySelector(".main-title");

let floatDirection = 1;

setInterval(() => {
  title.style.transform = `translateY(${floatDirection * 4}px)`;

  floatDirection *= -1;
}, 2000);

// =========================
// SMOOTH APPEAR ON LOAD
// =========================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// =========================
// DYNAMIC MUSIC REACTION
// =========================

setInterval(() => {
  if (!music.paused) {
    const scale = Math.random() * 0.03 + 1;

    glow.style.scale = scale;
  }
}, 500);
