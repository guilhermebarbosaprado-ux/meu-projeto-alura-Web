const botões = document.querySelectorAll("button");

botões.forEach(function (botão) {
        botão.addEventListener("click", botãoClicado);
        function botãoClicado() {
            console.log("fui clicado");
            let texto = botão.querySelector("span");
            texto.textContent++;
        }
    })

    const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

    btnTemaEscuro.addEventListener("click", mudaTema);

    function mudaTema() {
        const corpoPagina = document.body;
        if (corpoPagina.classList.contains("tema-escuro")) {
            corpoPagina.classList.remove("tema-escuro");
        } else {
            corpoPagina.classList.add("tema-escuro");
        }
    }
