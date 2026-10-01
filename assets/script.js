const botaoTema = document.querySelector("#theme-toggle");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});