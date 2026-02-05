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

console.log(getComputerChoice())