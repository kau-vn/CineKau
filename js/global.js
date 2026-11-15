document.addEventListener("DOMContentLoaded", () => {
    const nomeMarca = "Cine";
    const complementoMarca = "Kau";

    const logo = document.getElementById("logo");
    if (logo) {
        logo.innerHTML = `${nomeMarca}<span>${complementoMarca}</span>`;
    }

    document.title = document.title.replace("CineVerse", nomeMarca + complementoMarca);

    const rodape = document.querySelector("#rodape-site p");
    if (rodape) {
        rodape.innerHTML = rodape.innerHTML.replace("CineVerse", nomeMarca + complementoMarca);
    }

    const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.textContent = link.textContent.replace(/^\d{2}\.\s*/, "");

        if (link.getAttribute("href") === paginaAtual) {
            link.classList.add("ativo");
        }
    });
});
