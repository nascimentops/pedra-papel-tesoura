let humanScore = 0,
computerScore = 0;

playRound(getHumanChoice(), getComputerChoice())

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
            break;
        case 2:
            return "papel";
            break;
        default:
            return "tesoura";
            break;
    }
}

function getHumanChoice() {
    let choice = prompt("Escolha entre pedra, papel ou tesoura.");
    choice = choice.trim().toLowerCase();
    return choice;
}