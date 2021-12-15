const tp1 = document.getElementById("tp1");
const desc1 = document.querySelector(".desc1");

var ventana = document.getElementById("ventana");
function ventanaModal() {
  ventana.classList.add("active");
}
function cerrarModal() {
  ventana.classList.remove("active");
}

tp1.addEventListener("click", () => {
  if (desc1.style.display === "flex") {
    desc1.style.display = "none";
  } else {
    desc1.style.display = "flex";
  }
});

const tp2 = document.getElementById("tp2");
const desc2 = document.querySelector(".desc2");

tp2.addEventListener("click", () => {
  if (desc2.style.display === "flex") {
    desc2.style.display = "none";
  } else {
    desc2.style.display = "flex";
  }
});

const tp3 = document.getElementById("tp3");
const desc3 = document.querySelector(".desc3");

tp3.addEventListener("click", () => {
  if (desc3.style.display === "flex") {
    desc3.style.display = "none";
  } else {
    desc3.style.display = "flex";
  }
});

const tp4 = document.getElementById("tp4");
const desc4 = document.querySelector(".desc4");

tp4.addEventListener("click", () => {
  if (desc4.style.display === "flex") {
    desc4.style.display = "none";
  } else {
    desc4.style.display = "flex";
  }
});

const tp5 = document.getElementById("tp5");
const desc5 = document.querySelector(".desc5");

tp5.addEventListener("click", () => {
  if (desc5.style.display === "flex") {
    desc5.style.display = "none";
  } else {
    desc5.style.display = "flex";
  }
});

const tp6 = document.getElementById("tp6");
const desc6 = document.querySelector(".desc6");

tp6.addEventListener("click", () => {
  if (desc6.style.display === "flex") {
    desc6.style.display = "none";
  } else {
    desc6.style.display = "flex";
  }
});
