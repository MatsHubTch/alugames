const tirarTelaApagada = document.getElementById("game-3-img");
const mudarBotao = document.getElementById("button-3");

function alterarStatus() {
    tirarTelaApagada.classList.toggle("dashboard__item__img--rented"); 
     mudarBotao.classList.toggle("dashboard__item__button--return"); 
    
    }
