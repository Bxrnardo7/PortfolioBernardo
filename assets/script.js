const botao = document.querySelector("#hello-button");
const mensagem = document.querySelector("#hello-message");

botao.addEventListener("click", () => {
    mensagem.textContent = "Valeu por visitar meu portfólio!";
});