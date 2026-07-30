const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) { // for aech aciona qualquer um dos botoes de curtida 
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");

        if (curtiu === false){
        texto.textContent++;
        curtiu = true;
        // aparecera uma curtida se clicar
    }
    else{
        texto.textContent--,
        curtiu = false
        //aparecera nenhuma curtida se clicar novamente 
        }
    }
});