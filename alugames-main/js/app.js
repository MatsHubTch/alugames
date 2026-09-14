function alterarStatus(id) {
    const tirarTelaApagada = document.getElementById(`game-${id}-img`);
    const mudarBotao = document.getElementById(`button-${id}`);
    const textoBotao = document.getElementById(`mudarTextoNoBotão-${id}`);

    tirarTelaApagada.classList.toggle("dashboard__item__img--rented");
    mudarBotao.classList.toggle("dashboard__item__button--return");
    textoBotao.classList.toggle("mudarTextoNoBotão-${id}");
    if (tirarTelaApagada.classList.contains("dashboard__item__img--rented")) {
        textoBotao.innerText = "Devolver";
    }else{textoBotao.innerText = "Alugar";}
    }
 