const botões = document.querySelectorAll("button");

botões.forEach(function (botão) {
        botão.addEventListener("click", botãoClicado);
        function botãoClicado() {
            console.log("fui clicado");
            let texto = botão.querySelector("span");
            texto.textContent++;
        }
    })
