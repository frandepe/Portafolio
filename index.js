const goTop = document.getElementById("goTop");

goTop.addEventListener("click", subir);

function subir() {
  document.body.scrollTop = 0;
}

window.addEventListener("scroll", scrollear);

function scrollear() {
  if (document.body.scrollTop > 800) {
    goTop.style.display = "flex";
  } else {
    goTop.style.display = "none";
  }
}

// HAM

const ham = document.querySelector(".ham");
const li = document.querySelector(".lista-navegacion");

ham.addEventListener("click", () => {
  li.classList.toggle("activado");
});

// CONTACT

let messageBox = document.querySelector(".js-message");
let btn = document.querySelector(".js-message-btn");
let card = document.querySelector(".js-profile-card");
let closeBtn = document.querySelectorAll(".js-message-close");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  card.classList.add("active");
});

closeBtn.forEach(function (element, index) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    card.classList.remove("active");
  });
});

// FLAGS

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();

  for (let textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }
};

flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});

// TOOLTIP

const tooltips = document.querySelectorAll(".tooltip");

window.onmousemove = function (e) {
  const x = e.clientX + 20 + "px",
    y = e.clientY + 20 + "px";
  for (let i = 0; i < tooltips.length; i++) {
    tooltips[i].style.top = y;
    tooltips[i].style.left = x;
  }
};
