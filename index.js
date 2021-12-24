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

// window.addEventListener("scroll", cambiarColorScroll);

// function cambiarColorScroll() {
//     if (document.body.scrollTop > 1500) {
//         goTop.style.color="#191A1E"
//     } else {
//         goTop.style.color="#F2ED54";
//     }

//     if (document.body.scrollTop > 2800){
//         goTop.style.color="#F2ED54";
//     }

// }

//HAM

const ham = document.querySelector(".ham");
const li = document.querySelector(".lista-navegacion");

ham.addEventListener("click", () => {
  li.classList.toggle("activado");
});
