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
  console.log(element);
  element.addEventListener("click", function (e) {
    e.preventDefault();
    card.classList.remove("active");
  });
});
