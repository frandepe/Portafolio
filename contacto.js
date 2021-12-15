const urlBase = "https://formspree.io/f/xjvjjwjp";

const $form = document.querySelector("#form");
const mensajeDeEnvio = document.getElementById("mensajeDeEnvio");

$form.addEventListener("submit", enviarForm);

async function enviarForm(e) {
  try {
    e.preventDefault();
    const formulario = new FormData($form);
    const response = await fetch(urlBase, {
      method: "POST",
      body: formulario,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      this.reset();
      mensajeDeEnvio.innerText =
        "Thank you for contacting me, I will respond as soon as possible :)";
    }
  } catch (error) {
    console.log("error", error);
  }
}
