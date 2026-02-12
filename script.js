const jogador = document.querySelector("#jogador");
const escolhaTexto = document.querySelector(".escolha");
let escolhaJogador = "";

jogador.addEventListener("click", (e) => {
    let target = e.target;

    switch (target.id) {
        case "pedra":
            escolhaTexto.textContent = "Sua escolha: Pedra";
            escolhaJogador = "pedra";
            break;
        case "papel":
            escolhaTexto.textContent = "Sua escolha: Papel";
            escolhaJogador = "papel";
            break;
        case "tesoura":
            escolhaTexto.textContent = "Sua escolha: Tesoura";
            escolhaJogador = "tesoura";
            break;
    }
})


function playRound(humanChoice, computerChoice){
    console.log("sua escolha:", humanChoice);
    console.log("escolha da máquina:", computerChoice);
    
    if (humanChoice == computerChoice){
        console.log("empate");
    } else if (humanChoice == "pedra"){
        if (computerChoice == "papel") {
            console.log("Você perdeu, papel ganha de pedra!");
            computerScore++;
        } else {
            console.log("Você ganhou, pedra ganha de tesoura!");
            humanScore++;
        }
    } else if (humanChoice == "tesoura") {
        if (computerChoice == "pedra") {
            console.log("Você perdeu, pedra ganha de tesoura!");
            computerScore++;
        } else {
            console.log("Você ganhou, tesoura ganha de papel!");
            humanScore++;
        }
    } else {
        if (computerChoice == "tesoura") {
            console.log("Você perdeu, tesoura ganha de papel!");
            computerScore++;
        } else {
            console.log("Você ganhou, papel ganha de pedra!");
            humanScore++;
        }
    }
    console.log("Sua pontuação:", humanScore);
    console.log("Pontuação da máquina:", computerScore);   
}

function getComputerChoice() {
    let rand = Math.round(Math.random() * (3 - 1) + 1)
    switch (rand) {
        case 1:
            return "pedra";
        case 2:
            return "papel";
        default:
            return "tesoura";
    }
}