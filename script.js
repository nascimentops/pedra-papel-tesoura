let humanScore, computerScore = 0;

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

console.log(getHumanChoice())
console.log(getComputerChoice())