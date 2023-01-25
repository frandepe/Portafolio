console.clear();
const bgUrls = [
  "./Imagenes/project16.jpg",
  "./Imagenes/project15.jpg",
  "./Imagenes/project13.jpg",
  "./Imagenes/project12.jpg",
  "./Imagenes/project14.jpg",
  "./Imagenes/proyect11.jpg",
  "./Imagenes/proyect6.jpg",
  "./Imagenes/proyect4.jpg",
  "./Imagenes/proyect9.jpg",
  "./Imagenes/proyect8.jpg",
  "./Imagenes/proyect2.jpg",
  "./Imagenes/proyect3.jpg",
];
const container = document.querySelector(".container");
const cards = document.querySelectorAll(".card");
let xVal = 0;
let xRate = 35;
let sVal = 1;
let sRate = 0.1;
let zIndex = 1;
let forwardCount = 0;
let borderColor = 80;

//INITAL SETUP
for (let i = 0; i < cards.length; i++) {
  cards[i].style.setProperty(
    "outline",
    `5px solid rgb(255, 255, ${borderColor})`
  );
  cards[i].style.backgroundColor = "red";
  cards[i].style.setProperty("--xVal", `${xVal}%`);
  cards[i].style.setProperty("--sVal", `${sVal}`);
  cards[i].style.setProperty("--z-index", `${zIndex}`);
  cards[i].style.backgroundImage = `url(${bgUrls[i]})`;
  xVal += xRate;
  sVal -= sRate;
  zIndex--;
  borderColor += 25;
}
// outline: 7px solid var(--fifth-gray)
const moveForward = () => {
  if (forwardCount < cards.length - 1) {
    cards.forEach((card) => {
      let xVal = parseFloat(
        card.style.getPropertyValue("--xVal").replace("%", "")
      );
      let sVal = parseFloat(card.style.getPropertyValue("--sVal"));
      let zInd = parseFloat(card.style.getPropertyValue("--z-index"));

      card.style.setProperty("--xVal", `${xVal - xRate}%`);

      if (xVal <= 0) {
        card.style.setProperty("--sVal", `${sVal - sRate}`);
        card.style.setProperty("--z-index", zInd - 1);
      } else {
        card.style.setProperty("--sVal", `${sVal + sRate}`);
        card.style.setProperty("--z-index", zInd + 1);
      }
    });

    forwardCount++;
  }
};

const moveBackwards = () => {
  if (forwardCount) {
    cards.forEach((card) => {
      let xVal = parseFloat(
        card.style.getPropertyValue("--xVal").replace("%", "")
      );
      let sVal = parseFloat(card.style.getPropertyValue("--sVal"));
      let zInd = parseFloat(card.style.getPropertyValue("--z-index"));

      card.style.setProperty("--xVal", `${xVal + xRate}%`);

      if (xVal < 0) {
        card.style.setProperty("--sVal", `${sVal + sRate}`);
        card.style.setProperty("--z-index", zInd + 1);
      } else {
        card.style.setProperty("--sVal", `${sVal - sRate}`);
        card.style.setProperty("--z-index", zInd - 1);
      }
    });

    forwardCount--;
  }
};

container.addEventListener("wheel", (e) => {
  if (e.deltaY === 100) {
    moveForward();
  } else {
    moveBackwards();
  }
});
