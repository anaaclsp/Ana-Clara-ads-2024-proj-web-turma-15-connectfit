function escondeProfissionais(){
    document.getElementById("fisioterapeutas").style.display = "none";
    document.getElementById("personais").style.display = "none";
    document.getElementById("medicos").style.display = "none";
    document.getElementById("nutricionistas").style.display = "none";
}

function exibirProfissionais(tipoProfissonal) {
    escondeProfissionais();
    var divListaProfissionais = document.getElementById(tipoProfissonal);
    divListaProfissionais.style.display = "flex";
    aplicaListenerBotoesSeguir();
}

function aplicaListenerBotoesSeguir(){
    const botoesSeguir = document.querySelectorAll(".seguir");
    for (const botao of botoesSeguir) {
        botao.addEventListener('click', function(e) {
            const botaoSeguir = e.target;
            botaoSeguir.innerHTML = botaoSeguir.innerHTML === "Seguir" ? "Seguindo" : "Seguir";
        });
    }
}