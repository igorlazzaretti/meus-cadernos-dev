// Loading
var i = setInterval(function () {
    clearInterval(i);

    // The desired code is only this:
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";
   
}, 1500);


// script.js
        // Seleciona todos os botões de toggle e os elementos de conteúdo
        const toggleButtons = document.querySelectorAll(".toggle-button");
        const contents = document.querySelectorAll(".toggle-content");

        // Adiciona um evento de clique para cada botão
        toggleButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                const content = contents[index];
                if (content.style.display === "none") {
                    content.style.display = "block";
                    button.textContent = `Esconder`;
                } else {
                    content.style.display = "none";
                    button.textContent = `Mostrar`;
                }
            });
        });